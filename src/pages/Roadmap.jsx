import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PHASES, ROADMAP_TYPES } from '../data/roadmap';
import useProgressStore from '../store/useProgressStore';
import ProgressRing from '../components/UI/ProgressRing';
import {
  CheckCircle2, Circle, Server, Database, Terminal, Globe,
  ChevronDown, ChevronUp, ArrowRight, BookOpen, Filter
} from 'lucide-react';
import './Roadmap.css';

const TYPE_ICONS = { backend: Server, database: Database, devops: Terminal, others: Globe };

const Roadmap = () => {
  const navigate = useNavigate();
  const { completedTopics, getPhaseProgress, completeTopic, uncompleteTopic } = useProgressStore();
  const [activeType, setActiveType] = useState('all');
  const [expandedPhases, setExpandedPhases] = useState({});

  const visiblePhases = activeType === 'all'
    ? PHASES
    : PHASES.filter(p => p.roadmapType === activeType);

  const handleToggleTopic = (e, topic) => {
    e.preventDefault(); e.stopPropagation();
    completedTopics.includes(topic.id)
      ? uncompleteTopic(topic.id, topic.xp)
      : completeTopic(topic.id, topic.xp);
  };

  const togglePhase = (phaseId) =>
    setExpandedPhases(prev => ({ ...prev, [phaseId]: !prev[phaseId] }));

  // Overall per-type stats
  const typeStats = Object.entries(ROADMAP_TYPES).map(([type, meta]) => {
    const topics = PHASES.filter(p => p.roadmapType === type).flatMap(p => p.topics);
    const done = topics.filter(t => completedTopics.includes(t.id)).length;
    const pct = topics.length > 0 ? Math.round((done / topics.length) * 100) : 0;
    return { type, meta, done, total: topics.length, pct };
  });

  return (
    <div className="roadmap-page">
      {/* ── Header ── */}
      <div className="roadmap-header animate-fade-in-up">
        <div>
          <h1 className="section-title">Complete Learning Roadmap</h1>
          <p className="section-subtitle">
            {PHASES.length} phases · {PHASES.flatMap(p => p.topics).length} topics across 4 tracks
          </p>
        </div>
      </div>

      {/* ── Type Overview Cards ── */}
      <div className="rm-type-cards animate-fade-in-up">
        {typeStats.map(({ type, meta, done, total, pct }) => {
          const Icon = TYPE_ICONS[type] || Globe;
          const isActive = activeType === type;
          return (
            <div
              key={type}
              className={`rm-type-card ${isActive ? 'active' : ''}`}
              style={{ borderColor: isActive ? meta.color : 'var(--border)', '--type-color': meta.color }}
              onClick={() => setActiveType(activeType === type ? 'all' : type)}
            >
              <div className="rm-type-card-top">
                <div className="rm-type-icon" style={{ color: meta.color, background: `${meta.color}18` }}>
                  <Icon size={18} />
                </div>
                <div className="rm-type-pct" style={{ color: meta.color }}>{pct}%</div>
              </div>
              <div className="rm-type-label">{meta.label}</div>
              <div className="rm-type-badge">{meta.badge}</div>
              <div className="rm-type-bar">
                <div className="rm-type-bar-fill" style={{ width: `${pct}%`, background: meta.color }} />
              </div>
              <div className="rm-type-count">{done}/{total} topics</div>
            </div>
          );
        })}
      </div>

      {/* ── Filter Tabs ── */}
      <div className="rm-filter-tabs animate-fade-in-up">
        <button
          className={`rm-tab ${activeType === 'all' ? 'active' : ''}`}
          onClick={() => setActiveType('all')}
        >
          <Filter size={13} /> All Roadmaps
          <span className="rm-tab-count">{PHASES.length}</span>
        </button>
        {Object.entries(ROADMAP_TYPES).map(([type, meta]) => {
          const Icon = TYPE_ICONS[type] || Globe;
          const count = PHASES.filter(p => p.roadmapType === type).length;
          return (
            <button
              key={type}
              className={`rm-tab ${activeType === type ? 'active' : ''}`}
              style={activeType === type ? { borderColor: meta.color, color: meta.color } : {}}
              onClick={() => setActiveType(activeType === type ? 'all' : type)}
            >
              <Icon size={13} /> {meta.label}
              <span className="rm-tab-count">{count}</span>
            </button>
          );
        })}
      </div>

      {/* ── Timeline ── */}
      <div className="roadmap-timeline">
        {visiblePhases.map((phase, idx) => {
          const { completed, total, percentage } = getPhaseProgress(phase.id);
          const isComplete = completed === total && total > 0;
          const isStarted = completed > 0;
          const status = isComplete ? 'complete' : isStarted ? 'active' : 'upcoming';
          const isExpanded = expandedPhases[phase.id] ?? (isStarted && !isComplete);
          const Icon = TYPE_ICONS[phase.roadmapType] || Globe;

          return (
            <div key={phase.id} className={`roadmap-phase ${status}`}>
              {idx < visiblePhases.length - 1 && (
                <div className={`phase-connector ${isComplete ? 'filled' : ''}`}
                  style={isComplete ? { background: phase.color } : {}} />
              )}

              <div className="phase-node" style={{ borderColor: isStarted ? phase.color : undefined }}>
                <ProgressRing percentage={percentage} size={72} strokeWidth={5}
                  color={phase.color} label={phase.icon} />
              </div>

              <div className="phase-content">
                <div className="phase-meta">
                  <div className="phase-meta-left">
                    <span className="phase-type-chip" style={{ color: phase.color, background: `${phase.color}15` }}>
                      <Icon size={11} /> {phase.roadmapLabel}
                    </span>
                    <span className={`phase-status-badge status-${status}`}>
                      {isComplete ? '✓ Complete' : isStarted ? '▶ In Progress' : '○ Not Started'}
                    </span>
                  </div>
                </div>

                <h2 className="phase-title" style={{ color: isStarted ? phase.color : undefined }}>
                  {phase.title}
                </h2>

                {phase.description && (
                  <p className="phase-desc">{phase.description.slice(0, 200)}{phase.description.length > 200 ? '…' : ''}</p>
                )}

                <div className="phase-stats">
                  <span><BookOpen size={12} /> {total} topics</span>
                  <span>⏱ {phase.estimatedWeeks} weeks</span>
                  <span>✅ {completed}/{total}</span>
                  {percentage > 0 && <span style={{ color: phase.color }}>{percentage}% done</span>}
                </div>

                <div className="phase-progress-bar">
                  <div className="phase-progress-fill" style={{ width: `${percentage}%`, background: phase.color }} />
                </div>

                {/* Collapse toggle */}
                <button className="phase-toggle-btn" onClick={() => togglePhase(phase.id)}>
                  {isExpanded ? <><ChevronUp size={14} /> Hide topics</> : <><ChevronDown size={14} /> Show {total} topics</>}
                </button>

                {/* Topics */}
                {isExpanded && (
                  <div className="phase-topics-list">
                    {phase.topics.map(topic => {
                      const isDone = completedTopics.includes(topic.id);
                      return (
                        <div
                          key={topic.id}
                          className={`topic-pill ${isDone ? 'done' : ''}`}
                          onClick={() => navigate(`/topics/${topic.id}`)}
                        >
                          <button className="topic-pill-check" onClick={(e) => handleToggleTopic(e, topic)}>
                            {isDone ? <CheckCircle2 size={14} /> : <Circle size={14} />}
                          </button>
                          <span className="topic-pill-title">{topic.title}</span>
                          <span className="topic-pill-meta">
                            <span>{topic.subtopics?.length || 0} subtopics</span>
                            <ArrowRight size={11} />
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Roadmap;