import fs from 'fs';

// ─── Config ───────────────────────────────────────────────────────────────────
const ROADMAP_FILES = [
  {
    file: 'backend-roadmap.md',
    type: 'backend',
    label: 'Backend',
    icon: '⚙️',
    color: '#7c6ef7',
    badge: 'Spring / Java',
  },
  {
    file: 'database-roadmap.md',
    type: 'database',
    label: 'Database',
    icon: '🗄️',
    color: '#06b6d4',
    badge: 'SQL / NoSQL',
  },
  {
    file: 'devops-roadmap.md',
    type: 'devops',
    label: 'DevOps',
    icon: '🚀',
    color: '#f59e0b',
    badge: 'CI/CD / Cloud',
  },
  {
    file: 'others-roadmap.md',
    type: 'others',
    label: 'Others',
    icon: '🌐',
    color: '#10b981',
    badge: 'Tools & More',
  },
];

const DIFFICULTY_BY_EMOJI = {
  '🟢': 'beginner',
  '🟡': 'intermediate',
  '🔵': 'advanced',
  '🔴': 'expert',
};

const XP_BY_DIFFICULTY = {
  beginner: 100,
  intermediate: 200,
  advanced: 350,
  expert: 500,
};

const HOURS_BY_DIFFICULTY = {
  beginner: 4,
  intermediate: 8,
  advanced: 12,
  expert: 20,
};

const PHASE_COLORS = [
  { color: '#7c6ef7', colorVar: '--accent-primary' },
  { color: '#06b6d4', colorVar: '--accent-cyan' },
  { color: '#10b981', colorVar: '--accent-green' },
  { color: '#f59e0b', colorVar: '--accent-gold' },
  { color: '#f43f5e', colorVar: '--accent-rose' },
  { color: '#8b5cf6', colorVar: '--accent-primary' },
  { color: '#0ea5e9', colorVar: '--accent-cyan' },
  { color: '#22c55e', colorVar: '--accent-green' },
  { color: '#eab308', colorVar: '--accent-gold' },
  { color: '#ec4899', colorVar: '--accent-rose' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Detect difficulty emoji anywhere in a string */
function detectDifficulty(str) {
  for (const [em, diff] of Object.entries(DIFFICULTY_BY_EMOJI)) {
    if (str.includes(em)) return diff;
  }
  return 'beginner';
}

/** Strip emoji chars and clean a string */
function cleanTitle(str) {
  return str.replace(/[🟢🟡🔵🔴]/g, '').replace(/\s+/g, ' ').trim();
}

// ─── Content Block Extractor ──────────────────────────────────────────────────
/**
 * Given an array of raw lines between two topic headings,
 * returns structured content: overview, codeExamples, tables, notes, subSections, subtopics
 */
function extractTopicContent(rawLines) {
  const result = {
    subtopics: [],        // { id, title }
    overview: '',         // Markdown prose (intro paragraphs)
    codeExamples: [],     // [{ lang, code, caption }]
    tables: [],           // raw markdown table strings
    notes: [],            // important notes / tips / rules
    subSections: [],      // { title, items: [string] }
  };

  let i = 0;
  let subCounter = 0;
  let subtopicCounter = 0;

  // Prose accumulator (overview)
  const overviewLines = [];

  // Current sub-section
  let currentSubSection = null;

  while (i < rawLines.length) {
    const raw = rawLines[i];
    const line = raw.trimEnd();
    const trimmed = line.trim();

    // ── ### Sub-section heading ──────────────────────────────────
    if (/^###\s/.test(trimmed)) {
      // push previous sub-section
      if (currentSubSection) result.subSections.push(currentSubSection);
      currentSubSection = { title: trimmed.replace(/^###\s+/, '').trim(), items: [] };
      i++;
      continue;
    }

    // ── Code block ───────────────────────────────────────────────
    if (/^```/.test(trimmed)) {
      const langMatch = trimmed.match(/^```(\w*)/);
      const lang = langMatch ? langMatch[1] || 'text' : 'text';
      const codeLines = [];
      i++;
      while (i < rawLines.length && !/^```/.test(rawLines[i].trim())) {
        codeLines.push(rawLines[i]);
        i++;
      }
      i++; // skip closing ```
      const code = codeLines.join('\n');
      if (code.trim()) {
        result.codeExamples.push({ lang, code, caption: '' });
      }
      continue;
    }

    // ── Markdown table ───────────────────────────────────────────
    if (/^\|/.test(trimmed)) {
      const tableLines = [];
      while (i < rawLines.length && /^\|/.test(rawLines[i].trim())) {
        tableLines.push(rawLines[i]);
        i++;
      }
      result.tables.push(tableLines.join('\n'));
      continue;
    }

    // ── Checklist item ───────────────────────────────────────────
    if (/^[-*]\s*\[ \]/.test(trimmed)) {
      const title = trimmed.replace(/^[-*]\s*\[\s*\]\s*/, '').trim();
      subtopicCounter++;
      const sub = { id: `sub-${subtopicCounter}`, title };
      result.subtopics.push(sub);
      if (currentSubSection) {
        currentSubSection.items.push(title);
      }
      i++;
      continue;
    }

    // ── Regular list item (not checklist) — treat as note/info ──
    if (/^[-*]\s+/.test(trimmed) && !/^[-*]\s*\[/.test(trimmed)) {
      const note = trimmed.replace(/^[-*]\s+/, '').trim();
      if (note && note.length > 3) {
        result.notes.push(note);
        if (currentSubSection) currentSubSection.items.push(note);
      }
      i++;
      continue;
    }

    // ── Horizontal rule ─────────────────────────────────────────
    if (/^---+$/.test(trimmed)) {
      i++;
      continue;
    }

    // ── Plain prose line ─────────────────────────────────────────
    if (trimmed && !trimmed.startsWith('#')) {
      overviewLines.push(trimmed);
    }

    i++;
  }

  // Push last sub-section
  if (currentSubSection) result.subSections.push(currentSubSection);

  result.overview = overviewLines.join('\n\n');

  return result;
}

// ─── Main Parser ──────────────────────────────────────────────────────────────
function parseRoadmap(config, globalPhaseIdStart) {
  const content = fs.readFileSync(config.file, 'utf8');
  const lines = content.split('\n').map(l => l.replace(/\r$/, ''));

  const phases = [];
  let currentPhase = null;
  let phaseIdCounter = globalPhaseIdStart;
  let phaseLocalIdx = 0;
  let topicGlobalSeq = 0;

  // We'll collect lines per topic to pass to extractTopicContent
  let currentTopicLines = [];
  let currentTopicMeta = null; // { id, title, difficulty }

  function buildAutoOverview(title, subtopics, roadmapLabel, difficulty) {
    const diffDescriptions = {
      beginner:     'a foundational concept that every developer should understand early in their learning journey',
      intermediate: 'an intermediate-level topic that builds on core fundamentals and is widely used in production',
      advanced:     'an advanced topic that requires solid foundational knowledge and is critical for senior-level work',
      expert:       'an expert-level topic used in complex, large-scale production systems',
    };
    const desc = diffDescriptions[difficulty] || diffDescriptions.beginner;
    let overview = `**${title}** is ${desc} in the **${roadmapLabel}** roadmap.`;

    if (subtopics && subtopics.length > 0) {
      const sample = subtopics.slice(0, 4).map(s => s.title);
      overview += `\n\nIn this topic you will study: ${sample.join(', ')}`;
      if (subtopics.length > 4) overview += `, and ${subtopics.length - 4} more concepts.`;
      else overview += '.';
    }

    overview += '\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.';
    return overview;
  }

  function cleanOverview(text) {
    if (!text) return '';
    // Remove bare instruction-only lines like "Learn:", "Understand:", "Master all of these:"
    const noise = /^(Learn:|Understand:|Master all of these:|Note:|Important:|Difference:|Typical layers:|The following is a )/i;
    const lines = text.split('\n\n').filter(para => {
      const t = para.trim();
      return t.length > 15 && !noise.test(t);
    });
    return lines.join('\n\n');
  }

  function flushTopic() {
    if (!currentTopicMeta || !currentPhase) return;
    const content = extractTopicContent(currentTopicLines);

    // Re-assign subtopic IDs to be unique within topic
    content.subtopics = content.subtopics.map((s, idx) => ({
      ...s,
      id: `${currentTopicMeta.id}-s${idx + 1}`,
    }));

    // Clean and/or build overview
    let overview = cleanOverview(content.overview);
    if (!overview || overview.length < 40) {
      overview = buildAutoOverview(
        currentTopicMeta.title,
        content.subtopics,
        config.label,
        currentTopicMeta.difficulty
      );
    }

    // Primary code example
    const primaryCode = content.codeExamples[0];

    currentPhase.topics.push({
      id: currentTopicMeta.id,
      number: currentPhase.topics.length + 1,
      title: currentTopicMeta.title,
      difficulty: currentTopicMeta.difficulty,
      estimatedHours: HOURS_BY_DIFFICULTY[currentTopicMeta.difficulty],
      xp: XP_BY_DIFFICULTY[currentTopicMeta.difficulty],
      subtopics: content.subtopics,
      overview,
      codeExample: primaryCode ? primaryCode.code : '',
      codeExampleLang: primaryCode ? primaryCode.lang : 'java',
      codeExamples: content.codeExamples,
      tables: content.tables,
      notes: content.notes,
      subSections: content.subSections,
      exercises: [],
      tags: [config.type, currentTopicMeta.difficulty],
      prerequisites: [],
      roadmapType: config.type,
      roadmapLabel: config.label,
      roadmapBadge: config.badge,
    });

    currentTopicLines = [];
    currentTopicMeta = null;
  }

  function flushPhase() {
    if (currentPhase && currentPhase.topics.length > 0) {
      phases.push(currentPhase);
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // ── Phase heading: # Phase N / # Part N — various separators ─
    const phaseMatch =
      trimmed.match(/^# Phase\s*\d+\s*[—–\-]+\s*(.+)$/) ||
      trimmed.match(/^# Part\s*\d+\s*[—–\-]+\s*(.+)$/) ||
      trimmed.match(/^# Phase\s*\d+\s+(.+)$/) ||
      trimmed.match(/^# Part\s*\d+\s+(.+)$/);
    if (phaseMatch) {
      flushTopic();
      flushPhase();
      const title = cleanTitle(phaseMatch[1]);
      const colorConf = PHASE_COLORS[phaseLocalIdx % PHASE_COLORS.length];
      currentPhase = {
        id: phaseIdCounter++,
        title,
        icon: config.icon,
        color: colorConf.color,
        colorVar: colorConf.colorVar,
        estimatedWeeks: '2-4',
        description: '',
        roadmapType: config.type,
        roadmapLabel: config.label,
        roadmapBadge: config.badge,
        topics: [],
      };
      phaseLocalIdx++;
      currentTopicLines = [];
      currentTopicMeta = null;
      continue;
    }

    // ── Document-level # heading (not Phase) — use as first phase if none exists
    const h1Match = trimmed.match(/^# (.+)$/);
    if (h1Match && !phaseMatch) {
      // Skip document title and overview sections (they contain no topics)
      continue;
    }

    // ── Topic heading: ## N. Title [emoji]  OR  ## Title [emoji] ─
    const topicMatch = trimmed.match(/^## (.+)$/);
    if (topicMatch && currentPhase) {
      flushTopic();
      topicGlobalSeq++;
      const rawTitle = topicMatch[1];
      const difficulty = detectDifficulty(rawTitle);
      const title = cleanTitle(rawTitle.replace(/^\d+\.\s*/, ''));
      currentTopicMeta = {
        id: `${config.type}-t${topicGlobalSeq}`,
        title,
        difficulty,
      };
      currentTopicLines = [];
      continue;
    }

    // ── Collect lines for current topic ──────────────────────────
    if (currentTopicMeta) {
      currentTopicLines.push(line);
    } else if (currentPhase) {
      // Phase-level description lines (between phase heading and first topic)
      if (trimmed && !trimmed.startsWith('#') && !trimmed.startsWith('```')) {
        currentPhase.description += (currentPhase.description ? ' ' : '') + trimmed;
      }
    }
  }

  flushTopic();
  flushPhase();

  return phases;
}

// ─── Run ──────────────────────────────────────────────────────────────────────
let allPhases = [];
let phaseIdCursor = 1;

for (const config of ROADMAP_FILES) {
  const phases = parseRoadmap(config, phaseIdCursor);
  phases.forEach((p, i) => { p.id = phaseIdCursor + i; });
  phaseIdCursor += phases.length;
  allPhases = allPhases.concat(phases);
}

const totalTopics = allPhases.reduce((s, p) => s + p.topics.length, 0);
const totalSubtopics = allPhases.reduce((s, p) =>
  s + p.topics.reduce((ts, t) => ts + t.subtopics.length, 0), 0);
const topicsWithCode = allPhases.reduce((s, p) =>
  s + p.topics.filter(t => t.codeExample).length, 0);
const topicsWithOverview = allPhases.reduce((s, p) =>
  s + p.topics.filter(t => t.overview && t.overview.length > 20).length, 0);

const output = `// ============================================================
// GENERATED MULTI-ROADMAP DATA — Enhanced Parser
// Sources: backend-roadmap.md, database-roadmap.md, devops-roadmap.md, others-roadmap.md
// Total Phases  : ${allPhases.length}
// Total Topics  : ${totalTopics}
// Total Subtopics: ${totalSubtopics}
// With Code     : ${topicsWithCode}
// With Overview : ${topicsWithOverview}
// ============================================================

export const PHASES = ${JSON.stringify(allPhases, null, 2)};
`;

fs.writeFileSync('src/data/roadmap-generated.js', output);

console.log(`\n✅ Generation Complete`);
console.log(`   Phases     : ${allPhases.length}`);
console.log(`   Topics     : ${totalTopics}`);
console.log(`   Subtopics  : ${totalSubtopics}`);
console.log(`   With Code  : ${topicsWithCode} / ${totalTopics}`);
console.log(`   With Overview: ${topicsWithOverview} / ${totalTopics}`);
console.log('');
ROADMAP_FILES.forEach(r => {
  const ph = allPhases.filter(p => p.roadmapType === r.type);
  const tc = ph.reduce((s, p) => s + p.topics.length, 0);
  const cc = ph.reduce((s, p) => s + p.topics.filter(t => t.codeExample).length, 0);
  const oc = ph.reduce((s, p) => s + p.topics.filter(t => t.overview && t.overview.length > 20).length, 0);
  console.log(`   ${r.icon}  ${r.label.padEnd(10)} → ${ph.length} phases, ${tc} topics, ${cc} with code, ${oc} with overview`);
});
