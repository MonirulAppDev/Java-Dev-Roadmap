import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Flame, Star, BookOpen, Trophy, ArrowRight, Zap, Target,
  TrendingUp, Clock, CheckCircle2, Play, Coffee, ChevronDown,
  Server, Database, Terminal, Globe, BarChart2, Award, Users
} from 'lucide-react';
import useProgressStore from '../store/useProgressStore';
import { PHASES, GOAL_TRACKS, getAllTopics, ROADMAP_TYPES } from '../data/roadmap';
import { DIFFICULTY_CONFIG } from '../data/roadmap';
import ProgressRing from '../components/UI/ProgressRing';
import './Dashboard.css';

const allTopics = getAllTopics();

// ── Roadmap type meta ───────────────────────────────────────────────────────
const TYPE_ICONS = { backend: Server, database: Database, devops: Terminal, others: Globe };

const StatCard = ({ icon: Icon, value, label, color, sublabel, onClick }) => (
  <div className="stat-card" style={{ cursor: onClick ? 'pointer' : 'default' }} onClick={onClick}>
    <div className="stat-icon" style={{ color, background: `${color}20` }}>
      <Icon size={20} />
    </div>
    <div className="stat-body">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
      {sublabel && <div className="stat-sublabel">{sublabel}</div>}
    </div>
    {onClick && <ArrowRight size={15} style={{ color: 'var(--text-muted)', marginLeft: 'auto' }} />}
  </div>
);

// ── Per-roadmap progress bar ────────────────────────────────────────────────
const RoadmapBar = ({ type, completedTopics }) => {
  const meta = ROADMAP_TYPES[type];
  const topics = PHASES.filter(p => p.roadmapType === type).flatMap(p => p.topics);
  const done = topics.filter(t => completedTopics.includes(t.id)).length;
  const pct = topics.length > 0 ? Math.round((done / topics.length) * 100) : 0;
  const Icon = TYPE_ICONS[type] || Globe;
  return (
    <div className="rm-bar-row">
      <div className="rm-bar-label">
        <Icon size={14} style={{ color: meta.color }} />
        <span>{meta.label}</span>
        <span className="rm-bar-badge">{meta.badge}</span>
      </div>
      <div className="rm-bar-track">
        <div className="rm-bar-fill" style={{ width: `${pct}%`, background: meta.color }} />
      </div>
      <span className="rm-bar-pct" style={{ color: meta.color }}>{pct}%</span>
      <span className="rm-bar-count">{done}/{topics.length}</span>
    </div>
  );
};

// ── Phase card ──────────────────────────────────────────────────────────────
const PhaseCard = ({ phase, progress, onClick }) => {
  const { completed, total, percentage } = progress;
  const isComplete = completed === total && total > 0;
  const isStarted = completed > 0;
  return (
    <div
      className={`phase-progress-card ${isComplete ? 'complete' : isStarted ? 'active' : ''}`}
      onClick={onClick}
      style={{ cursor: 'pointer', borderLeftColor: phase.color }}
    >
      <div className="phase-card-header">
        <div className="phase-emoji">{phase.icon}</div>
        <div className="phase-card-info">
          <div className="phase-card-badge" style={{ color: phase.color }}>
            {phase.roadmapLabel}
          </div>
          <div className="phase-card-title">{phase.title}</div>
        </div>
        <div className="phase-card-pct" style={{ color: phase.color }}>{percentage}%</div>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percentage}%`, background: phase.color }} />
      </div>
      <div className="phase-card-footer">
        <span>{completed}/{total} topics</span>
        <span style={{ color: phase.color }}>
          {isComplete ? '✓ Complete' : isStarted ? '▶ In Progress' : '○ Not Started'}
        </span>
      </div>
    </div>
  );
};

// ── Next Topic Card ─────────────────────────────────────────────────────────
const NextTopicCard = ({ topic, onClick }) => {
  const diff = DIFFICULTY_CONFIG[topic.difficulty] || DIFFICULTY_CONFIG.beginner;
  const rmType = ROADMAP_TYPES[topic.roadmapType];
  return (
    <div className="next-topic-card animate-fade-in-up" onClick={onClick}>
      <div className="next-topic-header">
        <div className="next-badge"><Zap size={12} /> Up Next</div>
        <div style={{ display: 'flex', gap: 8 }}>
          {rmType && <span className="next-rm-tag" style={{ color: rmType.color }}>{rmType.icon} {rmType.label}</span>}
          <span className="next-xp">+{topic.xp} XP</span>
        </div>
      </div>
      <div className="next-topic-body">
        <div className="next-topic-num" style={{ color: rmType?.color }}>{topic.roadmapBadge}</div>
        <h3 className="next-topic-title">{topic.title}</h3>
        <p className="next-topic-overview">{topic.overview?.replace(/\*\*/g, '').slice(0, 120)}…</p>
        <div className="next-topic-meta">
          <span className="next-diff" style={{ color: diff.color }}>{diff.icon} {topic.difficulty}</span>
          <span><Clock size={11} /> {topic.estimatedHours}h</span>
          <span><BookOpen size={11} /> {topic.subtopics?.length || 0} subtopics</span>
        </div>
      </div>
      <ArrowRight size={20} className="next-arrow" />
    </div>
  );
};

// ─── Main Dashboard ────────────────────────────────────────────────────────
const Dashboard = () => {
  const navigate = useNavigate();
  const {
    streak, totalXP, completedTopics, selectedGoal, setSelectedGoal,
    getOverallProgress, getPhaseProgress, getLevel, unlockedAchievements, completedProjects
  } = useProgressStore();

  const [goalMenuOpen, setGoalMenuOpen] = useState(false);

  const overall = getOverallProgress();
  const level = getLevel();
  const nextTopic = allTopics.find(t => !completedTopics.includes(t.id));
  const goal = selectedGoal ? GOAL_TRACKS[selectedGoal] : null;

  // Recommended topics for selected goal
  const recommendedTopics = useMemo(() => {
    if (!goal) return [];
    return allTopics
      .filter(t => goal.recommendedTopicIds.includes(t.id))
      .slice(0, 8);
  }, [goal, completedTopics]);

  // Phase progress
  const phaseProgresses = useMemo(() =>
    PHASES.map(p => ({ phase: p, progress: getPhaseProgress(p.id) })),
    [completedTopics]
  );
  const activePhases    = phaseProgresses.filter(p => p.progress.completed > 0 && p.progress.completed < p.progress.total);
  const completedPhases = phaseProgresses.filter(p => p.progress.completed === p.progress.total && p.progress.total > 0);
  const upcomingPhases  = phaseProgresses.filter(p => p.progress.completed === 0);

  // Total topic counts per type
  const typeCounts = useMemo(() =>
    Object.keys(ROADMAP_TYPES).map(type => ({
      type,
      total: PHASES.filter(p => p.roadmapType === type).flatMap(p => p.topics).length,
      done: PHASES.filter(p => p.roadmapType === type).flatMap(p => p.topics).filter(t => completedTopics.includes(t.id)).length,
    })), [completedTopics]
  );

  return (
    <div className="dashboard">
      <div className="blob blob-purple" />
      <div className="blob blob-cyan" />

      {/* ── Hero ── */}
      <div className="dashboard-hero animate-fade-in-up">
        <div className="hero-content">
          <div className="hero-badge">
            <Coffee size={14} />
            <span>Java Backend Learning Platform</span>
          </div>
          <h1 className="hero-title">
            Your Learning <span className="gradient-text">Dashboard ☕</span>
          </h1>
          <p className="hero-subtitle">
            {overall.completed === 0
              ? `${overall.total} topics across 4 roadmaps. Start your journey today.`
              : `${overall.completed} of ${overall.total} topics done. Keep going — you're at ${overall.percentage}%.`}
          </p>
          {nextTopic ? (
            <Link to={`/topics/${nextTopic.id}`} className="btn btn-primary hero-cta">
              <Play size={16} />
              {completedTopics.length === 0 ? 'Start Learning' : 'Continue Learning'}
              <ArrowRight size={16} />
            </Link>
          ) : (
            <Link to="/achievements" className="btn btn-primary hero-cta">
              <Trophy size={16} /> All Done! View Achievements
            </Link>
          )}
        </div>
        <div className="hero-ring">
          <ProgressRing percentage={overall.percentage} size={160} strokeWidth={10}
            label={`${overall.percentage}%`} sublabel="Complete" />
          <div className="ring-details">
            <div className="ring-detail"><span>{overall.completed}</span> topics done</div>
            <div className="ring-detail"><span>{overall.total - overall.completed}</span> remaining</div>
          </div>
        </div>
      </div>

      {/* ── Stats Grid ── */}
      <div className="stats-grid stagger-children">
        <StatCard icon={Flame} value={streak} label="Day Streak" color="#ff6b35"
          sublabel={streak > 0 ? '🔥 Keep it up!' : 'Start today'} />
        <StatCard icon={Star} value={totalXP.toLocaleString()} label="Total XP" color="var(--accent-gold)"
          sublabel={`Level ${level.level} • ${level.title}`} />
        <StatCard icon={Trophy} value={unlockedAchievements.length} label="Achievements"
          color="var(--accent-cyan)" sublabel={`of ${30} badges`}
          onClick={() => navigate('/achievements')} />
        <StatCard icon={BarChart2} value={completedProjects.length} label="Projects Built"
          color="var(--accent-primary)" sublabel="Portfolio items"
          onClick={() => navigate('/projects')} />
      </div>

      {/* ── Roadmap Progress Overview ── */}
      <div className="rm-overview-card animate-fade-in-up">
        <div className="section-header" style={{ marginBottom: 'var(--space-4)' }}>
          <div>
            <h2 className="section-title">Roadmap Progress</h2>
            <p className="section-subtitle">Progress across all 4 learning tracks</p>
          </div>
          <Link to="/roadmap" className="btn btn-secondary btn-sm">
            View Full Roadmap <ArrowRight size={14} />
          </Link>
        </div>
        <div className="rm-bars">
          {Object.keys(ROADMAP_TYPES).map(type => (
            <RoadmapBar key={type} type={type} completedTopics={completedTopics} />
          ))}
        </div>
      </div>

      {/* ── Next Topic ── */}
      {nextTopic && <NextTopicCard topic={nextTopic} onClick={() => navigate(`/topics/${nextTopic.id}`)} />}

      {/* ── Goal Track ── */}
      <div className="goal-section animate-fade-in-up">
        <div className="section-header">
          <div>
            <h2 className="section-title">Your Learning Goal</h2>
            <p className="section-subtitle">Choose a track for a personalised learning path.</p>
          </div>
          <div className="goal-selector-wrapper">
            <button className="btn btn-secondary" onClick={() => setGoalMenuOpen(!goalMenuOpen)}>
              {goal ? <><span>{goal.icon}</span> {goal.title}</> : 'Select a Goal'}
              <ChevronDown size={16} />
            </button>
            {goalMenuOpen && (
              <div className="goal-dropdown">
                {Object.entries(GOAL_TRACKS).map(([key, track]) => (
                  <button key={key} onClick={() => { setSelectedGoal(key); setGoalMenuOpen(false); }}>
                    <span>{track.icon}</span>
                    <div>
                      <div style={{ fontWeight: 600 }}>{track.title}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{track.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {goal && (
          <div className="goal-info-card" style={{ borderColor: goal.color }}>
            <div className="gic-icon">{goal.icon}</div>
            <div className="gic-body">
              <div className="gic-title">{goal.title}</div>
              <div className="gic-desc">{goal.description}</div>
              <div className="gic-stats">
                <span>{goal.phaseIds.length} phases</span>
                <span>{PHASES.filter(p => goal.phaseIds.includes(p.id)).flatMap(p => p.topics).length} topics</span>
                <span>{goal.recommendedTopicIds.length} recommended</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Recommended Topics ── */}
      {recommendedTopics.length > 0 && (
        <div className="recommended-section animate-fade-in-up">
          <div className="section-header">
            <div>
              <h2 className="section-title">Recommended For You</h2>
              <p className="section-subtitle">Based on goal: <strong>{goal?.title}</strong></p>
            </div>
          </div>
          <div className="recommended-grid">
            {recommendedTopics.map(topic => {
              const isDone = completedTopics.includes(topic.id);
              const rmType = ROADMAP_TYPES[topic.roadmapType];
              return (
                <Link to={`/topics/${topic.id}`} key={topic.id} className={`topic-card-sm ${isDone ? 'done' : ''}`}>
                  <div className="topic-card-sm-header">
                    <span className="tc-type" style={{ color: rmType?.color }}>{rmType?.icon} {rmType?.label}</span>
                    <span className="topic-card-sm-xp">+{topic.xp} XP</span>
                  </div>
                  <h4 className="topic-card-sm-title">{topic.title}</h4>
                  <div className="topic-card-sm-footer">
                    <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{topic.subtopics?.length || 0} subtopics</span>
                    {isDone && <CheckCircle2 size={14} style={{ color: 'var(--accent-green)' }} />}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Active Phases ── */}
      {(activePhases.length > 0 || completedPhases.length > 0 || upcomingPhases.length > 0) && (
        <div className="phases-section animate-fade-in-up">
          <div className="section-header">
            <div>
              <h2 className="section-title">Phase Progress</h2>
              <p className="section-subtitle">{PHASES.length} phases across all roadmaps</p>
            </div>
            <Link to="/roadmap" className="btn btn-secondary btn-sm">
              Full Roadmap <ArrowRight size={14} />
            </Link>
          </div>

          {activePhases.length > 0 && (
            <>
              <div className="phases-label">▶ In Progress</div>
              <div className="phases-grid">
                {activePhases.slice(0, 4).map(({ phase, progress }) => (
                  <PhaseCard key={phase.id} phase={phase} progress={progress}
                    onClick={() => navigate(`/topics?phase=${phase.id}`)} />
                ))}
              </div>
            </>
          )}

          {completedPhases.length > 0 && (
            <>
              <div className="phases-label">✓ Completed</div>
              <div className="phases-grid">
                {completedPhases.slice(0, 4).map(({ phase, progress }) => (
                  <PhaseCard key={phase.id} phase={phase} progress={progress}
                    onClick={() => navigate('/roadmap')} />
                ))}
              </div>
            </>
          )}

          {activePhases.length === 0 && completedPhases.length === 0 && (
            <>
              <div className="phases-label">○ Get Started</div>
              <div className="phases-grid">
                {upcomingPhases.slice(0, 6).map(({ phase, progress }) => (
                  <PhaseCard key={phase.id} phase={phase} progress={progress}
                    onClick={() => navigate(`/topics/${phase.topics[0]?.id}`)} />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;