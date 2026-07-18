import React, { useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  CheckCircle2, Circle, Clock, Zap, Copy, Check, ChevronLeft,
  ChevronRight, BookOpen, Code2, Terminal, FileText, Tag,
  Lightbulb, AlertTriangle, Info, Star, Target, List, Play
} from 'lucide-react';
import useProgressStore from '../store/useProgressStore';
import { PHASES, DIFFICULTY_CONFIG, getAllTopics } from '../data/roadmap';
import './TopicDetail.css';

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Language label map */
const LANG_LABELS = {
  java: 'Java', sql: 'SQL', bash: 'Bash', shell: 'Shell',
  yaml: 'YAML', json: 'JSON', xml: 'XML', text: 'Text',
  dockerfile: 'Dockerfile', groovy: 'Groovy', properties: 'Properties',
  kotlin: 'Kotlin', javascript: 'JavaScript', python: 'Python',
};

const LANG_COLORS = {
  java: '#f59e0b', sql: '#06b6d4', bash: '#10b981', shell: '#10b981',
  yaml: '#7c6ef7', json: '#f43f5e', xml: '#ec4899', text: '#8b949e',
  dockerfile: '#0ea5e9', groovy: '#22c55e',
};

/** Render a simple markdown-ish overview text */
function RenderOverview({ text }) {
  if (!text) return null;
  const blocks = text.split(/\n\n+/);
  return (
    <div className="overview-body">
      {blocks.map((block, i) => {
        const trimmed = block.trim();
        if (!trimmed) return null;
        // Bold inline: **text**
        const rendered = trimmed.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        return (
          <p key={i} dangerouslySetInnerHTML={{ __html: rendered }} />
        );
      })}
    </div>
  );
}

/** Parse and render a markdown table */
function RenderTable({ raw }) {
  if (!raw) return null;
  const rows = raw.trim().split('\n').filter(r => r.trim());
  if (rows.length < 2) return null;
  const parse = r => r.split('|').map(c => c.trim()).filter(Boolean);
  const headers = parse(rows[0]);
  const dataRows = rows.slice(2).map(parse); // skip separator row
  return (
    <div className="md-table-wrap">
      <table className="md-table">
        <thead>
          <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {dataRows.map((row, ri) => (
            <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Code block with copy & language label */
function CodeBlock({ code, lang = 'java', caption }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  const label = LANG_LABELS[lang?.toLowerCase()] || lang?.toUpperCase() || 'Code';
  const color = LANG_COLORS[lang?.toLowerCase()] || '#8b949e';

  return (
    <div className="code-block-rich">
      <div className="cbr-toolbar">
        <div className="cbr-dots">
          <span className="dot dot-red" /><span className="dot dot-yellow" /><span className="dot dot-green" />
        </div>
        <span className="cbr-lang" style={{ color }}>{label}</span>
        {caption && <span className="cbr-caption">{caption}</span>}
        <button className="cbr-copy" onClick={handleCopy} title="Copy code">
          {copied ? <><Check size={13} /> Copied!</> : <><Copy size={13} /> Copy</>}
        </button>
      </div>
      <pre className="cbr-pre"><code>{code}</code></pre>
    </div>
  );
}

/** Overview tab — Introduction + notes + tables + code */
function OverviewTab({ topic }) {
  const hasOverview = topic.overview && topic.overview.length > 10;
  const hasTables = topic.tables && topic.tables.length > 0;
  const hasNotes = topic.notes && topic.notes.length > 0;

  return (
    <div className="tab-panel">

      {/* Introduction */}
      <section className="td-section">
        <div className="td-section-header">
          <Info size={16} className="td-section-icon" style={{ color: '#7c6ef7' }} />
          <h2>Introduction</h2>
        </div>
        {hasOverview ? (
          <RenderOverview text={topic.overview} />
        ) : (
          <div className="auto-overview">
            <p>
              <strong>{topic.title}</strong> is a key concept in the{' '}
              <span className="highlight">{topic.roadmapLabel}</span> roadmap.
              This topic covers everything you need to know to build production-grade applications.
            </p>
            <p>
              Mastering this topic will unlock <strong>{topic.xp} XP</strong> and take approximately{' '}
              <strong>{topic.estimatedHours} hours</strong> of study time.
            </p>
          </div>
        )}
      </section>

      {/* What You Will Learn */}
      {topic.subtopics?.length > 0 && (
        <section className="td-section">
          <div className="td-section-header">
            <Target size={16} className="td-section-icon" style={{ color: '#10b981' }} />
            <h2>What You Will Learn</h2>
          </div>
          <div className="learn-grid">
            {topic.subtopics.slice(0, 12).map((sub, i) => (
              <div key={sub.id} className="learn-item">
                <span className="learn-bullet">›</span>
                <span>{sub.title}</span>
              </div>
            ))}
            {topic.subtopics.length > 12 && (
              <div className="learn-item learn-item--more">
                +{topic.subtopics.length - 12} more in the Checklist tab
              </div>
            )}
          </div>
        </section>
      )}

      {/* Tables (if any) */}
      {hasTables && (
        <section className="td-section">
          <div className="td-section-header">
            <List size={16} className="td-section-icon" style={{ color: '#06b6d4' }} />
            <h2>Reference</h2>
          </div>
          <div className="tables-list">
            {topic.tables.map((t, i) => <RenderTable key={i} raw={t} />)}
          </div>
        </section>
      )}

      {/* Important Notes */}
      {hasNotes && (
        <section className="td-section">
          <div className="td-section-header">
            <Lightbulb size={16} className="td-section-icon" style={{ color: '#f59e0b' }} />
            <h2>Key Points & Best Practices</h2>
          </div>
          <div className="notes-grid">
            {topic.notes.map((note, i) => (
              <div key={i} className="note-item">
                <span className="note-bullet">💡</span>
                <span>{note}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* First code example on overview too */}
      {topic.codeExample && (
        <section className="td-section">
          <div className="td-section-header">
            <Code2 size={16} className="td-section-icon" style={{ color: '#f43f5e' }} />
            <h2>Quick Example</h2>
          </div>
          <CodeBlock code={topic.codeExample} lang={topic.codeExampleLang} />
        </section>
      )}
    </div>
  );
}

/** Subtopics/Checklist tab */
function ChecklistTab({ topic, completedSubtopics, toggleSubtopic }) {
  const done = topic.subtopics?.filter(s => completedSubtopics.includes(s.id)).length || 0;
  const total = topic.subtopics?.length || 0;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  // Group by subSection if available
  const hasSections = topic.subSections && topic.subSections.length > 0;

  return (
    <div className="tab-panel">
      {/* Progress bar */}
      <div className="checklist-progress">
        <div className="cp-bar">
          <div className="cp-fill" style={{ width: `${pct}%` }} />
        </div>
        <span className="cp-txt">{done} / {total} completed ({pct}%)</span>
      </div>

      {hasSections ? (
        // Grouped by sub-section
        topic.subSections.map((sec, si) => (
          <div key={si} className="checklist-section">
            <h3 className="checklist-section-title">{sec.title}</h3>
            <div className="subtopics-list">
              {topic.subtopics
                .filter(sub => sec.items.includes(sub.title))
                .map(sub => {
                  const isDone = completedSubtopics.includes(sub.id);
                  return (
                    <SubtopicRow key={sub.id} sub={sub} isDone={isDone} onToggle={() => toggleSubtopic(sub.id)} />
                  );
                })}
            </div>
          </div>
        ))
      ) : (
        // Flat list
        <div className="subtopics-list">
          {topic.subtopics?.map(sub => {
            const isDone = completedSubtopics.includes(sub.id);
            return <SubtopicRow key={sub.id} sub={sub} isDone={isDone} onToggle={() => toggleSubtopic(sub.id)} />;
          })}
        </div>
      )}

      {total === 0 && <p style={{ color: 'var(--text-muted)' }}>No checklist items for this topic.</p>}
    </div>
  );
}

function SubtopicRow({ sub, isDone, onToggle }) {
  return (
    <div className={`subtopic-item ${isDone ? 'done' : ''}`} onClick={onToggle}>
      <div className="subtopic-check">
        {isDone
          ? <CheckCircle2 size={17} style={{ color: 'var(--accent-green)' }} />
          : <Circle size={17} />}
      </div>
      <span className="subtopic-title">{sub.title}</span>
    </div>
  );
}

/** Code Examples tab */
function CodeTab({ topic }) {
  const examples = topic.codeExamples || [];
  if (topic.codeExample && examples.length === 0) {
    examples.push({ lang: topic.codeExampleLang || 'java', code: topic.codeExample });
  }

  return (
    <div className="tab-panel">
      {examples.length === 0 ? (
        <div className="empty-state">
          <Code2 size={40} strokeWidth={1.5} />
          <p>No code examples available for this topic.</p>
          <p className="empty-sub">Check the subtopics for theoretical concepts.</p>
        </div>
      ) : (
        <div className="code-examples-list">
          {examples.map((ex, i) => (
            <section key={i} className="td-section">
              <div className="td-section-header">
                <Code2 size={16} className="td-section-icon" style={{ color: LANG_COLORS[ex.lang] || '#8b949e' }} />
                <h2>Example {examples.length > 1 ? i + 1 : ''}</h2>
              </div>
              <CodeBlock code={ex.code} lang={ex.lang} caption={ex.caption} />
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

/** Notes Tab — personal notes textarea */
function NotesTab({ topic, notes, setNote }) {
  const [text, setText] = useState(notes[topic.id] || '');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setNote(topic.id, text);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="tab-panel">
      <section className="td-section">
        <div className="td-section-header">
          <FileText size={16} className="td-section-icon" style={{ color: '#7c6ef7' }} />
          <h2>My Notes</h2>
        </div>
        <textarea
          className="notes-textarea"
          placeholder="Write your own notes, examples, questions, or summaries here…"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <div className="notes-actions">
          <span className="notes-hint">{text.length} characters</span>
          <button className="btn btn-primary" onClick={handleSave}>
            {saved ? <><Check size={14} /> Saved!</> : <><FileText size={14} /> Save Note</>}
          </button>
        </div>
      </section>

      {/* Reminders */}
      <section className="td-section">
        <div className="td-section-header">
          <Lightbulb size={16} className="td-section-icon" style={{ color: '#f59e0b' }} />
          <h2>Study Tips</h2>
        </div>
        <div className="tips-list">
          {[
            'Read the subtopics and tick them off as you study each one.',
            'Try to write your own code examples from memory.',
            'Summarize the topic in 3 sentences as if explaining to a beginner.',
            'Look up official documentation and add key links to your notes.',
          ].map((tip, i) => (
            <div key={i} className="tip-item">
              <span className="tip-num">{i + 1}</span>
              <span>{tip}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
const TABS = [
  { key: 'overview',   label: 'Overview',  icon: <BookOpen size={14} /> },
  { key: 'subtopics',  label: 'Checklist', icon: <Circle size={14} /> },
  { key: 'code',       label: 'Examples',  icon: <Code2 size={14} /> },
  { key: 'notes',      label: 'My Notes',  icon: <FileText size={14} /> },
];

const DIFF_COLORS = {
  beginner:     { color: '#10b981', bg: 'rgba(16,185,129,0.12)', icon: '🌱' },
  intermediate: { color: '#f59e0b', bg: 'rgba(245,158,11,0.12)', icon: '🔥' },
  advanced:     { color: '#06b6d4', bg: 'rgba(6,182,212,0.12)',  icon: '🚀' },
  expert:       { color: '#f43f5e', bg: 'rgba(244,63,94,0.12)',  icon: '⭐' },
};

const TopicDetail = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const {
    completedTopics, completedSubtopics, notes,
    completeTopic, uncompleteTopic, toggleSubtopic, setNote
  } = useProgressStore();

  const allTopics = getAllTopics();
  const topicIndex = allTopics.findIndex(t => t.id === topicId);
  const topic = allTopics[topicIndex];
  const prevTopic = allTopics[topicIndex - 1];
  const nextTopic = allTopics[topicIndex + 1];
  const phase = PHASES.find(p => p.topics.some(t => t.id === topicId));

  if (!topic) {
    return (
      <div style={{ padding: 'var(--space-10)', textAlign: 'center', color: 'var(--text-muted)' }}>
        <h2>Topic not found</h2>
        <button className="btn btn-primary" onClick={() => navigate('/topics')}>Back to Topics</button>
      </div>
    );
  }

  const isCompleted = completedTopics.includes(topic.id);
  const diff = DIFF_COLORS[topic.difficulty] || DIFF_COLORS.beginner;

  // Count checklist progress
  const subDone = topic.subtopics?.filter(s => completedSubtopics.includes(s.id)).length || 0;
  const subTotal = topic.subtopics?.length || 0;

  const handleToggleComplete = () => {
    if (isCompleted) uncompleteTopic(topic.id, topic.xp);
    else completeTopic(topic.id, topic.xp);
  };

  const handleNextTopic = () => {
    if (!isCompleted) completeTopic(topic.id, topic.xp);
    navigate(`/topics/${nextTopic.id}`);
  };

  // Roadmap accent color
  const roadmapColors = { backend: '#7c6ef7', database: '#06b6d4', devops: '#f59e0b', others: '#10b981' };
  const accentColor = roadmapColors[topic.roadmapType] || '#7c6ef7';

  return (
    <div className="topic-detail-page" style={{ '--topic-accent': accentColor }}>

      {/* ── Breadcrumb ── */}
      <div className="breadcrumb animate-fade-in-up">
        <button className="btn-icon breadcrumb-back" onClick={() => navigate(-1)}>
          <ChevronLeft size={16} />
        </button>
        <span className="breadcrumb-phase" style={{ color: phase?.color || accentColor }}>
          {phase?.icon} {phase?.title}
        </span>
        <ChevronRight size={14} style={{ color: 'var(--text-muted)' }} />
        <span className="breadcrumb-current">{topic.title}</span>
      </div>

      {/* ── Hero Header ── */}
      <div className="td-hero animate-fade-in-up" style={{ '--hero-accent': accentColor }}>
        <div className="td-hero__bar" />
        <div className="td-hero__body">
          <div className="td-hero__top">
            {/* Badges */}
            <div className="td-hero__badges">
              <span className="td-badge" style={{ color: diff.color, background: diff.bg }}>
                {diff.icon} {topic.difficulty}
              </span>
              {topic.roadmapBadge && (
                <span className="td-badge td-badge--secondary">{topic.roadmapBadge}</span>
              )}
              <span className="td-badge td-badge--secondary">
                <Clock size={11} /> {topic.estimatedHours}h
              </span>
              <span className="td-badge" style={{ color: '#f59e0b', background: 'rgba(245,158,11,0.12)' }}>
                <Zap size={11} /> +{topic.xp} XP
              </span>
            </div>

            {/* Complete button */}
            <button
              className={`btn td-complete-btn ${isCompleted ? 'td-complete-btn--done' : ''}`}
              onClick={handleToggleComplete}
            >
              {isCompleted
                ? <><CheckCircle2 size={17} /> Completed</>
                : <><Circle size={17} /> Mark Complete</>}
            </button>
          </div>

          <h1 className="td-hero__title">{topic.title}</h1>

          {/* Sub-progress */}
          {subTotal > 0 && (
            <div className="td-hero__progress">
              <div className="td-hero__prog-bar">
                <div className="td-hero__prog-fill" style={{ width: `${Math.round((subDone / subTotal) * 100)}%` }} />
              </div>
              <span className="td-hero__prog-txt">
                {subDone}/{subTotal} subtopics • {Math.round((subDone / subTotal) * 100)}%
              </span>
            </div>
          )}

          {/* Tags */}
          {topic.tags?.length > 0 && (
            <div className="td-hero__tags">
              {topic.tags.map(tag => (
                <span key={tag} className="td-tag"><Tag size={10} /> {tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="topic-tabs animate-fade-in-up">
        {TABS.map(tab => (
          <button
            key={tab.key}
            className={`topic-tab ${activeTab === tab.key ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.icon}
            {tab.label}
            {tab.key === 'subtopics' && subTotal > 0 && (
              <span className="tab-badge">{subDone}/{subTotal}</span>
            )}
            {tab.key === 'code' && topic.codeExamples?.length > 0 && (
              <span className="tab-badge">{topic.codeExamples.length}</span>
            )}
          </button>
        ))}
      </div>

      {/* ── Tab Content ── */}
      <div className="topic-tab-content animate-fade-in-up">
        {activeTab === 'overview' && <OverviewTab topic={topic} />}
        {activeTab === 'subtopics' && (
          <ChecklistTab
            topic={topic}
            completedSubtopics={completedSubtopics}
            toggleSubtopic={toggleSubtopic}
          />
        )}
        {activeTab === 'code' && <CodeTab topic={topic} />}
        {activeTab === 'notes' && (
          <NotesTab topic={topic} notes={notes} setNote={setNote} />
        )}
      </div>

      {/* ── Navigation ── */}
      <div className="topic-navigation animate-fade-in-up">
        {prevTopic ? (
          <button className="btn btn-secondary nav-btn" onClick={() => navigate(`/topics/${prevTopic.id}`)}>
            <ChevronLeft size={16} />
            <div className="nav-btn-content">
              <span className="nav-btn-label">Previous</span>
              <span className="nav-btn-title">{prevTopic.title}</span>
            </div>
          </button>
        ) : <div />}

        {nextTopic && (
          <button className="btn btn-primary nav-btn" onClick={handleNextTopic}>
            <div className="nav-btn-content">
              <span className="nav-btn-label">Next & Complete</span>
              <span className="nav-btn-title">{nextTopic.title}</span>
            </div>
            <ChevronRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default TopicDetail;