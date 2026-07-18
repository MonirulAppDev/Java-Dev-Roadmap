import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Clock, Zap, CheckCircle2, Circle, Code2, Server, Database,
  Terminal, Globe, Filter, X, ChevronRight, Layers, Star
} from 'lucide-react';
import { PROJECTS, ROADMAP_TYPES } from '../data/roadmap';
import useProgressStore from '../store/useProgressStore';
import './Projects.css';

const TYPE_ICONS = { backend: Server, database: Database, devops: Terminal, others: Globe };
const DIFF_STYLES = {
  beginner:     { color: '#10b981', bg: 'rgba(16,185,129,0.10)', label: '🌱 Beginner'     },
  intermediate: { color: '#f59e0b', bg: 'rgba(245,158,11,0.10)', label: '🔥 Intermediate' },
  advanced:     { color: '#06b6d4', bg: 'rgba(6,182,212,0.10)',  label: '🚀 Advanced'     },
  expert:       { color: '#f43f5e', bg: 'rgba(244,63,94,0.10)',  label: '⭐ Expert'       },
};

const allProjects = [
  ...PROJECTS.beginner.map(p => ({ ...p, category: 'beginner' })),
  ...PROJECTS.intermediate.map(p => ({ ...p, category: 'intermediate' })),
  ...PROJECTS.advanced.map(p => ({ ...p, category: 'advanced' })),
  ...PROJECTS.expert.map(p => ({ ...p, category: 'expert' })),
];

// ── Project Card ─────────────────────────────────────────────────────────────
const ProjectCard = ({ project, isCompleted, onToggle, onSelect, isSelected }) => {
  const diff = DIFF_STYLES[project.category];
  const rm   = ROADMAP_TYPES[project.roadmapType] || ROADMAP_TYPES.backend;
  const Icon = TYPE_ICONS[project.roadmapType] || Code2;

  return (
    <div
      className={`project-card ${isCompleted ? 'completed' : ''} ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(project)}
      style={{ '--pcard-color': diff.color }}
    >
      <div className="pcard-top">
        <div className="pcard-icon-wrap" style={{ background: diff.bg, color: diff.color }}>
          <Icon size={18} />
        </div>
        <div className="pcard-badges">
          <span className="pcard-diff" style={{ color: diff.color, background: diff.bg }}>
            {diff.label}
          </span>
          <span className="pcard-rm" style={{ color: rm.color }}>
            {rm.icon} {rm.label}
          </span>
        </div>
        <button
          className={`pcard-check ${isCompleted ? 'done' : ''}`}
          onClick={e => { e.stopPropagation(); onToggle(e, project); }}
          title={isCompleted ? 'Mark incomplete' : 'Mark complete'}
        >
          {isCompleted ? <CheckCircle2 size={22} /> : <Circle size={22} />}
        </button>
      </div>

      <h3 className="pcard-title">{project.title}</h3>
      <p className="pcard-desc">{project.description.slice(0, 110)}…</p>

      <div className="pcard-meta">
        <span><Clock size={11} /> {project.hours}h</span>
        <span><Zap size={11} /> +{project.xp} XP</span>
        <span><Layers size={11} /> {project.skills.length} skills</span>
      </div>

      <div className="pcard-skills">
        {project.skills.slice(0, 3).map(s => <span key={s} className="skill-chip">{s}</span>)}
        {project.skills.length > 3 && <span className="skill-chip more">+{project.skills.length - 3}</span>}
      </div>
    </div>
  );
};

// ── Detail Panel ─────────────────────────────────────────────────────────────
const ProjectPanel = ({ project, isCompleted, onToggle, onClose }) => {
  const diff = DIFF_STYLES[project.category];
  const rm   = ROADMAP_TYPES[project.roadmapType] || ROADMAP_TYPES.backend;
  return (
    <div className="project-details-overlay" onClick={onClose}>
      <div className="project-details-panel animate-slide-in-right" onClick={e => e.stopPropagation()}>
        <div className="panel-header" style={{ borderBottomColor: diff.color }}>
          <div>
            <div className="panel-rm-tag" style={{ color: rm.color }}>{rm.icon} {rm.label} · {diff.label}</div>
            <h2>{project.title}</h2>
          </div>
          <button className="btn-icon" onClick={onClose}><X size={18} /></button>
        </div>

        <div className="panel-body">
          {/* Meta */}
          <div className="panel-meta-row">
            <span className="panel-meta-chip" style={{ color: '#f59e0b', background: 'rgba(245,158,11,0.12)' }}>
              <Zap size={12} /> +{project.xp} XP
            </span>
            <span className="panel-meta-chip">
              <Clock size={12} /> ~{project.hours}h estimated
            </span>
            {project.techStack?.map(t => (
              <span key={t} className="panel-meta-chip">{t}</span>
            ))}
          </div>

          {/* Description */}
          <div className="panel-section">
            <h3><Layers size={15} /> Project Description</h3>
            <p>{project.description}</p>
          </div>

          {/* Steps */}
          {project.steps && (
            <div className="panel-section">
              <h3><ChevronRight size={15} /> How To Complete</h3>
              <ol className="panel-steps">
                {project.steps.map((step, i) => (
                  <li key={i}>
                    <span className="step-num">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Skills */}
          <div className="panel-section">
            <h3><Star size={15} /> Skills Applied</h3>
            <div className="skills-tags">
              {project.skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
            </div>
          </div>
        </div>

        <div className="panel-footer">
          {isCompleted ? (
            <button className="btn btn-success full-width" onClick={e => onToggle(e, project)}>
              <CheckCircle2 size={17} /> Completed — Mark Incomplete
            </button>
          ) : (
            <button className="btn btn-primary full-width" onClick={e => onToggle(e, project)}>
              <Circle size={17} /> Mark as Complete (+{project.xp} XP)
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Main Projects Page ────────────────────────────────────────────────────
const Projects = () => {
  const { completedProjects, completeProject, uncompleteProject } = useProgressStore();
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterCat, setFilterCat] = useState('all');
  const [filterType, setFilterType] = useState('all');

  const totalXP = allProjects.reduce((s, p) => s + p.xp, 0);
  const earnedXP = allProjects
    .filter(p => completedProjects.includes(p.id))
    .reduce((s, p) => s + p.xp, 0);

  const filtered = useMemo(() => allProjects.filter(p => {
    const catOk  = filterCat  === 'all' || p.category    === filterCat;
    const typeOk = filterType === 'all' || p.roadmapType === filterType;
    return catOk && typeOk;
  }), [filterCat, filterType]);

  const handleToggle = (e, project) => {
    e.stopPropagation();
    completedProjects.includes(project.id)
      ? uncompleteProject(project.id, project.xp)
      : completeProject(project.id, project.xp);
  };

  const categories = ['all', 'beginner', 'intermediate', 'advanced', 'expert'];
  const diffStyles = { all: { color: 'var(--text-secondary)', bg: 'var(--bg-elevated)' }, ...DIFF_STYLES };

  return (
    <div className="projects-page">
      {/* ── Header ── */}
      <div className="projects-header animate-fade-in-up">
        <div>
          <h1 className="section-title">Projects Portfolio</h1>
          <p className="section-subtitle">
            {allProjects.length} real-world projects across Backend, Database and DevOps tracks.
          </p>
        </div>
        <div className="projects-stats">
          <div className="proj-stat">
            <span className="proj-stat-val">{completedProjects.length}/{allProjects.length}</span>
            <span className="proj-stat-lbl">Completed</span>
          </div>
          <div className="proj-stat">
            <span className="proj-stat-val" style={{ color: '#f59e0b' }}>{earnedXP.toLocaleString()}</span>
            <span className="proj-stat-lbl">XP Earned</span>
          </div>
          <div className="proj-stat">
            <span className="proj-stat-val" style={{ color: '#06b6d4' }}>{totalXP.toLocaleString()}</span>
            <span className="proj-stat-lbl">Total XP</span>
          </div>
        </div>
      </div>

      {/* ── Filters ── */}
      <div className="proj-filters animate-fade-in-up">
        <div className="proj-filter-group">
          <span className="filter-label"><Filter size={12} /> Difficulty:</span>
          {categories.map(cat => (
            <button
              key={cat}
              className={`proj-filter-btn ${filterCat === cat ? 'active' : ''}`}
              style={filterCat === cat ? { color: diffStyles[cat]?.color, borderColor: diffStyles[cat]?.color, background: diffStyles[cat]?.bg } : {}}
              onClick={() => setFilterCat(cat)}
            >
              {cat === 'all' ? 'All' : DIFF_STYLES[cat].label}
            </button>
          ))}
        </div>
        <div className="proj-filter-group">
          <span className="filter-label">Track:</span>
          {['all', ...Object.keys(ROADMAP_TYPES)].map(type => {
            const meta = type === 'all' ? null : ROADMAP_TYPES[type];
            return (
              <button
                key={type}
                className={`proj-filter-btn ${filterType === type ? 'active' : ''}`}
                style={filterType === type && meta ? { color: meta.color, borderColor: meta.color, background: `${meta.color}15` } : {}}
                onClick={() => setFilterType(type)}
              >
                {type === 'all' ? 'All Tracks' : `${meta.icon} ${meta.label}`}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Grid ── */}
      <div className="projects-grid animate-fade-in-up">
        {filtered.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            isCompleted={completedProjects.includes(project.id)}
            isSelected={selectedProject?.id === project.id}
            onToggle={handleToggle}
            onSelect={setSelectedProject}
          />
        ))}
        {filtered.length === 0 && (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: 'var(--space-12)', color: 'var(--text-muted)' }}>
            No projects match the selected filters.
          </div>
        )}
      </div>

      {/* ── Detail Panel ── */}
      {selectedProject && (
        <ProjectPanel
          project={selectedProject}
          isCompleted={completedProjects.includes(selectedProject.id)}
          onToggle={handleToggle}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;