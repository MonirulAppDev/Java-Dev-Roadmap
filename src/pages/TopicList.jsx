import React, { useState, useMemo, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  BookOpen, CheckCircle2, Circle, Clock, Zap, Target, Filter,
  Search, ChevronDown, ChevronUp, BarChart2, Award, Layers,
  Server, Database, Terminal, Globe, TrendingUp
} from 'lucide-react';
import useProgressStore from '../store/useProgressStore';
import { PHASES, getAllTopics } from '../data/roadmap';
import ProgressRing from '../components/UI/ProgressRing';
import './TopicList.css';

// ─── Constants ────────────────────────────────────────────────────────────────
const ROADMAP_TABS = [
  { key: 'all',      label: 'All',      icon: <Layers size={15} />,   color: '#7c6ef7' },
  { key: 'backend',  label: 'Backend',  icon: <Server size={15} />,   color: '#7c6ef7' },
  { key: 'database', label: 'Database', icon: <Database size={15} />, color: '#06b6d4' },
  { key: 'devops',   label: 'DevOps',   icon: <Terminal size={15} />, color: '#f59e0b' },
  { key: 'others',   label: 'Others',   icon: <Globe size={15} />,    color: '#10b981' },
];

const DIFFICULTY_META = {
  beginner:     { icon: '🌱', color: '#10b981', bg: 'rgba(16,185,129,0.12)', label: 'Beginner' },
  intermediate: { icon: '🔥', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)', label: 'Intermediate' },
  advanced:     { icon: '🚀', color: '#06b6d4', bg: 'rgba(6,182,212,0.12)',  label: 'Advanced' },
  expert:       { icon: '⭐', color: '#f43f5e', bg: 'rgba(244,63,94,0.12)',  label: 'Expert' },
};

// ─── Topic Card ───────────────────────────────────────────────────────────────
const TopicCard = React.memo(({ topic, isCompleted, onToggle, onClick, rank }) => {
  const diff = DIFFICULTY_META[topic.difficulty] || DIFFICULTY_META.beginner;
  const subtopicCount = topic.subtopics?.length || 0;
  const roadmapColors = {
    backend: '#7c6ef7', database: '#06b6d4', devops: '#f59e0b', others: '#10b981',
  };
  const accentColor = roadmapColors[topic.roadmapType] || '#7c6ef7';

  return (
    <div
      className={`tcard ${isCompleted ? 'tcard--done' : ''}`}
      style={{ '--card-accent': accentColor }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}
    >
      {/* Glow bar */}
      <div className="tcard__bar" />

      {/* Top row */}
      <div className="tcard__top">
        <span className="tcard__diff" style={{ color: diff.color, background: diff.bg }}>
          {diff.icon} {diff.label}
        </span>
        {topic.roadmapBadge && (
          <span className="tcard__badge">{topic.roadmapBadge}</span>
        )}
        <button
          className={`tcard__check ${isCompleted ? 'tcard__check--done' : ''}`}
          onClick={e => { e.stopPropagation(); onToggle(); }}
          title={isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
          aria-label="Toggle completion"
        >
          {isCompleted ? <CheckCircle2 size={18} /> : <Circle size={18} />}
        </button>
      </div>

      {/* Title */}
      <h3 className="tcard__title">{topic.title}</h3>

      {/* Subtopics preview */}
      {subtopicCount > 0 && (
        <div className="tcard__subs">
          {topic.subtopics.slice(0, 3).map(s => (
            <span key={s.id} className="tcard__sub-item">{s.title}</span>
          ))}
          {subtopicCount > 3 && (
            <span className="tcard__sub-more">+{subtopicCount - 3} more</span>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="tcard__footer">
        <span className="tcard__meta"><Clock size={12} /> {topic.estimatedHours}h</span>
        {topic.exercises?.length > 0 && (
          <span className="tcard__meta"><BookOpen size={12} /> {topic.exercises.length} ex</span>
        )}
        <span className="tcard__xp"><Zap size={12} /> +{topic.xp} XP</span>
      </div>

      {/* Completion overlay */}
      {isCompleted && <div className="tcard__done-overlay" />}
    </div>
  );
});

// ─── Phase Section ────────────────────────────────────────────────────────────
const PhaseSection = ({ phase, completedTopics, onToggle, onNavigate, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  const done = phase.topics.filter(t => completedTopics.includes(t.id)).length;
  const pct = phase.topics.length ? Math.round((done / phase.topics.length) * 100) : 0;

  return (
    <div className="phase-sec" style={{ '--phase-color': phase.color }}>
      <button className="phase-sec__hd" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <div className="phase-sec__hd-left">
          <span className="phase-sec__icon">{phase.icon}</span>
          <div className="phase-sec__info">
            <div className="phase-sec__name">
              {phase.roadmapLabel && (
                <span className="phase-sec__roadmap-label">{phase.roadmapLabel}</span>
              )}
              {phase.title}
            </div>
            <div className="phase-sec__sub">{phase.topics.length} topics · {phase.estimatedWeeks} weeks</div>
          </div>
        </div>
        <div className="phase-sec__hd-right">
          <div className="phase-sec__prog">
            <div className="phase-sec__prog-bar">
              <div className="phase-sec__prog-fill" style={{ width: `${pct}%` }} />
            </div>
            <span className="phase-sec__prog-txt">{done}/{phase.topics.length}</span>
          </div>
          <span className="phase-sec__chevron">{open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</span>
        </div>
      </button>

      {open && (
        <div className="phase-sec__body">
          <div className="topics-grid">
            {phase.topics.map((topic, idx) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                rank={idx + 1}
                isCompleted={completedTopics.includes(topic.id)}
                onToggle={() => onToggle(topic)}
                onClick={() => onNavigate(topic.id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ─── Stats Bar ────────────────────────────────────────────────────────────────
const StatsBar = ({ phases, completedTopics }) => {
  const allTopics = phases.flatMap(p => p.topics);
  const done = allTopics.filter(t => completedTopics.includes(t.id)).length;
  const pct = allTopics.length ? Math.round((done / allTopics.length) * 100) : 0;
  const totalXP = allTopics.filter(t => completedTopics.includes(t.id)).reduce((s, t) => s + (t.xp || 0), 0);

  const byDiff = ['beginner', 'intermediate', 'advanced', 'expert'].map(d => ({
    d,
    count: allTopics.filter(t => t.difficulty === d).length,
    done: allTopics.filter(t => t.difficulty === d && completedTopics.includes(t.id)).length,
  }));

  return (
    <div className="stats-bar">
      <div className="stats-bar__item">
        <TrendingUp size={16} className="stats-bar__icon" style={{ color: '#7c6ef7' }} />
        <div>
          <div className="stats-bar__val">{pct}%</div>
          <div className="stats-bar__lbl">Overall</div>
        </div>
      </div>
      <div className="stats-bar__item">
        <Award size={16} className="stats-bar__icon" style={{ color: '#f59e0b' }} />
        <div>
          <div className="stats-bar__val">{totalXP.toLocaleString()}</div>
          <div className="stats-bar__lbl">XP Earned</div>
        </div>
      </div>
      <div className="stats-bar__item">
        <CheckCircle2 size={16} className="stats-bar__icon" style={{ color: '#10b981' }} />
        <div>
          <div className="stats-bar__val">{done}/{allTopics.length}</div>
          <div className="stats-bar__lbl">Topics Done</div>
        </div>
      </div>
      <div className="stats-bar__item">
        <BarChart2 size={16} className="stats-bar__icon" style={{ color: '#06b6d4' }} />
        <div>
          <div className="stats-bar__val">{phases.length}</div>
          <div className="stats-bar__lbl">Phases</div>
        </div>
      </div>
      {byDiff.map(({ d, count, done: doneCount }) => (
        <div className="stats-bar__item stats-bar__item--diff" key={d}>
          <span style={{ fontSize: '16px' }}>{DIFFICULTY_META[d].icon}</span>
          <div>
            <div className="stats-bar__val" style={{ color: DIFFICULTY_META[d].color }}>{doneCount}/{count}</div>
            <div className="stats-bar__lbl">{DIFFICULTY_META[d].label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────
const TopicList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { completedTopics, completeTopic, uncompleteTopic, selectedGoal } = useProgressStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [roadmapTab, setRoadmapTab] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [diffFilter, setDiffFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const handleToggle = useCallback((topic) => {
    if (completedTopics.includes(topic.id)) {
      uncompleteTopic(topic.id, topic.xp);
    } else {
      completeTopic(topic.id, topic.xp);
    }
  }, [completedTopics, completeTopic, uncompleteTopic]);

  const filteredPhases = useMemo(() => {
    return PHASES
      .filter(phase => roadmapTab === 'all' || phase.roadmapType === roadmapTab)
      .map(phase => {
        const filteredTopics = phase.topics.filter(topic => {
          const matchSearch = !searchQuery ||
            topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            topic.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
            topic.subtopics?.some(s => s.title.toLowerCase().includes(searchQuery.toLowerCase()));

          const isDone = completedTopics.includes(topic.id);
          const matchStatus = statusFilter === 'all' ||
            (statusFilter === 'completed' && isDone) ||
            (statusFilter === 'notStarted' && !isDone);

          const matchDiff = diffFilter === 'all' || topic.difficulty === diffFilter;
          return matchSearch && matchStatus && matchDiff;
        });
        return { ...phase, topics: filteredTopics };
      })
      .filter(phase => phase.topics.length > 0);
  }, [searchQuery, roadmapTab, statusFilter, diffFilter, completedTopics]);

  const clearFilters = () => {
    setSearchQuery(''); setRoadmapTab('all'); setStatusFilter('all'); setDiffFilter('all');
  };

  const isFiltered = searchQuery || roadmapTab !== 'all' || statusFilter !== 'all' || diffFilter !== 'all';

  return (
    <div className="tl-page">
      {/* ── Header ── */}
      <div className="tl-header">
        <div className="tl-header__left">
          <h1 className="tl-header__title">Learning Roadmap</h1>
          <p className="tl-header__sub">
            {getAllTopics().length} topics across {PHASES.length} phases · 4 roadmaps
          </p>
        </div>
        <div className="tl-header__right">
          <ProgressRing
            percentage={Math.round((completedTopics.length / Math.max(getAllTopics().length, 1)) * 100)}
            size={64}
            strokeWidth={5}
            label={`${Math.round((completedTopics.length / Math.max(getAllTopics().length, 1)) * 100)}%`}
          />
        </div>
      </div>

      {/* ── Stats ── */}
      <StatsBar phases={PHASES} completedTopics={completedTopics} />

      {/* ── Roadmap Tabs ── */}
      <div className="roadmap-tabs">
        {ROADMAP_TABS.map(tab => (
          <button
            key={tab.key}
            className={`roadmap-tab ${roadmapTab === tab.key ? 'roadmap-tab--active' : ''}`}
            style={{ '--tab-color': tab.color }}
            onClick={() => setRoadmapTab(tab.key)}
          >
            {tab.icon}
            {tab.label}
            <span className="roadmap-tab__count">
              {tab.key === 'all'
                ? PHASES.reduce((s, p) => s + p.topics.length, 0)
                : PHASES.filter(p => p.roadmapType === tab.key).reduce((s, p) => s + p.topics.length, 0)}
            </span>
          </button>
        ))}
      </div>

      {/* ── Search & Filters ── */}
      <div className="search-filter-bar">
        <div className="search-wrap">
          <Search size={16} className="search-icon" />
          <input
            className="search-input"
            type="text"
            placeholder="Search topics, subtopics, tags…"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="search-clear" onClick={() => setSearchQuery('')}>✕</button>
          )}
        </div>
        <button
          className={`filter-toggle ${showFilters ? 'filter-toggle--active' : ''}`}
          onClick={() => setShowFilters(v => !v)}
        >
          <Filter size={15} />
          Filters
          {isFiltered && <span className="filter-dot" />}
        </button>
      </div>

      {showFilters && (
        <div className="filter-panel">
          <div className="filter-panel__group">
            <span className="filter-panel__label">Status</span>
            <div className="filter-chip-row">
              {[
                { key: 'all', label: 'All' },
                { key: 'completed', label: '✓ Done' },
                { key: 'notStarted', label: '○ Not Started' },
              ].map(f => (
                <button
                  key={f.key}
                  className={`filter-chip ${statusFilter === f.key ? 'filter-chip--active' : ''}`}
                  onClick={() => setStatusFilter(f.key)}
                >{f.label}</button>
              ))}
            </div>
          </div>
          <div className="filter-panel__group">
            <span className="filter-panel__label">Difficulty</span>
            <div className="filter-chip-row">
              <button className={`filter-chip ${diffFilter === 'all' ? 'filter-chip--active' : ''}`} onClick={() => setDiffFilter('all')}>All</button>
              {Object.entries(DIFFICULTY_META).map(([key, m]) => (
                <button
                  key={key}
                  className={`filter-chip ${diffFilter === key ? 'filter-chip--active' : ''}`}
                  style={diffFilter === key ? { background: m.bg, color: m.color, borderColor: m.color } : {}}
                  onClick={() => setDiffFilter(key)}
                >{m.icon} {m.label}</button>
              ))}
            </div>
          </div>
          {isFiltered && (
            <button className="filter-clear" onClick={clearFilters}>Clear all filters</button>
          )}
        </div>
      )}

      {/* ── Results info ── */}
      {isFiltered && (
        <div className="results-info">
          Showing <strong>{filteredPhases.reduce((s, p) => s + p.topics.length, 0)}</strong> topics
          in <strong>{filteredPhases.length}</strong> phases
        </div>
      )}

      {/* ── Phases ── */}
      <div className="phases-container">
        {filteredPhases.length === 0 ? (
          <div className="no-results">
            <Search size={40} strokeWidth={1.5} />
            <p>No topics found matching your criteria.</p>
            <button className="btn btn-secondary" onClick={clearFilters}>Clear Filters</button>
          </div>
        ) : (
          filteredPhases.map((phase, idx) => (
            <PhaseSection
              key={phase.id}
              phase={phase}
              completedTopics={completedTopics}
              onToggle={handleToggle}
              onNavigate={id => navigate(`/topics/${id}`)}
              defaultOpen={idx < 2}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TopicList;