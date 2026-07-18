import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GOAL_TRACKS, PHASES, LEARNING_SEQUENCE, ROADMAP_TYPES, getAllTopics
} from '../data/roadmap';
import useProgressStore from '../store/useProgressStore';
import {
  CheckCircle2, Circle, ArrowRight, Clock, Zap, BookOpen,
  Target, Map, Star, Lock, ChevronRight, Play,
  Server, Database, Terminal, Globe
} from 'lucide-react';
import './StudyPlan.css';

const TYPE_ICONS = { backend: Server, database: Database, devops: Terminal, others: Globe };

// ─────────────────────────────────────────────────────────────────────────────
// The canonical learning sequence: combines all 4 roadmaps in the right order
// so users never get confused about what to study next.
// ─────────────────────────────────────────────────────────────────────────────
const MASTER_SEQUENCE = [
  {
    step: 1,
    title: 'Programming & Java Fundamentals',
    roadmapType: 'others',
    icon: '☕',
    color: '#10b981',
    duration: '4–6 weeks',
    why: 'Everything starts here. Without solid Java + OOP foundations, you cannot understand Spring or databases.',
    phaseFilter: (p) => p.roadmapType === 'others' && p.id <= 4,
    skills: ['Java syntax', 'OOP (classes, inheritance, polymorphism)', 'Collections & Generics', 'Exception handling', 'Basic algorithms'],
    milestone: 'Build a CLI calculator and a bank account OOP system.',
  },
  {
    step: 2,
    title: 'Data Structures & Algorithms',
    roadmapType: 'others',
    icon: '🧠',
    color: '#7c6ef7',
    duration: '3–4 weeks',
    why: 'DSA is tested in every tech interview and helps you write efficient code for real systems.',
    phaseFilter: (p) => p.roadmapType === 'others' && p.id >= 5 && p.id <= 7,
    skills: ['Arrays, LinkedLists, Stacks, Queues', 'Trees and Graphs', 'Sorting & Searching', 'Big-O complexity'],
    milestone: 'Solve 30+ LeetCode problems (Easy → Medium).',
  },
  {
    step: 3,
    title: 'SQL & Relational Databases',
    roadmapType: 'database',
    icon: '🗄️',
    color: '#06b6d4',
    duration: '3–4 weeks',
    why: 'Every backend application reads and writes data. SQL is non-negotiable before learning Spring Data JPA.',
    phaseFilter: (p) => p.roadmapType === 'database' && p.id <= 12,
    skills: ['SELECT, INSERT, UPDATE, DELETE', 'JOINs (inner, left, full)', 'Subqueries, CTEs, Window Functions', 'Transactions, ACID', 'Indexing basics'],
    milestone: 'Design a 3-table schema and write 20+ complex SQL queries.',
  },
  {
    step: 4,
    title: 'Git, Linux & Networking Basics',
    roadmapType: 'devops',
    icon: '🐧',
    color: '#f59e0b',
    duration: '1–2 weeks',
    why: 'You need Git for every project and basic Linux/networking to deploy and debug your apps.',
    phaseFilter: (p) => p.roadmapType === 'devops' && p.id <= 5,
    skills: ['Git: commit, branch, merge, rebase, PR', 'Linux CLI: files, processes, permissions', 'HTTP, TCP/IP, DNS basics', 'SSH, ports, firewalls'],
    milestone: 'Contribute to your own GitHub repo with a proper branching strategy.',
  },
  {
    step: 5,
    title: 'Spring Framework & Spring Boot',
    roadmapType: 'backend',
    icon: '⚙️',
    color: '#7c6ef7',
    duration: '4–6 weeks',
    why: 'The core of Java backend development. IoC, DI, and Auto-configuration power every modern Spring app.',
    phaseFilter: (p) => p.roadmapType === 'backend' && p.id <= 5,
    skills: ['Dependency Injection & IoC Container', '@SpringBootApplication, Starters', 'REST Controllers, @GetMapping etc.', 'application.properties / YAML', 'Logging with SLF4J'],
    milestone: 'Build a fully working REST API for a product catalog.',
  },
  {
    step: 6,
    title: 'Spring Data JPA & Database Integration',
    roadmapType: 'backend',
    icon: '🔗',
    color: '#8b5cf6',
    duration: '3–4 weeks',
    why: 'Connecting your Spring app to a real database — this is what you will do on the job every day.',
    phaseFilter: (p) => p.roadmapType === 'backend' && p.id >= 6 && p.id <= 9,
    skills: ['@Entity, @Repository, JpaRepository', 'JPQL and native queries', 'Relationships: @OneToMany, @ManyToMany', 'Transactions with @Transactional', 'N+1 problem and lazy loading'],
    milestone: 'Connect your REST API to PostgreSQL using Spring Data JPA.',
  },
  {
    step: 7,
    title: 'Validation, Error Handling & Testing',
    roadmapType: 'backend',
    icon: '🧪',
    color: '#ec4899',
    duration: '2–3 weeks',
    why: 'Production code must be tested and handle errors gracefully. This separates junior from mid-level.',
    phaseFilter: (p) => p.roadmapType === 'backend' && p.id >= 10 && p.id <= 13,
    skills: ['Bean Validation (@NotNull, @Size)', '@ControllerAdvice & @ExceptionHandler', 'JUnit 5 + Mockito unit tests', '@SpringBootTest integration tests', 'Testcontainers for DB testing'],
    milestone: 'Achieve 80%+ test coverage on your REST API.',
  },
  {
    step: 8,
    title: 'Spring Security & JWT',
    roadmapType: 'backend',
    icon: '🔒',
    color: '#f43f5e',
    duration: '3–4 weeks',
    why: 'Every real API needs authentication and authorization. Spring Security is the industry standard.',
    phaseFilter: (p) => p.roadmapType === 'backend' && p.id >= 14 && p.id <= 17,
    skills: ['SecurityFilterChain configuration', 'JWT token generation & validation', 'Role-based access (@PreAuthorize)', 'OAuth2 with Google/GitHub', 'Password hashing with BCrypt'],
    milestone: 'Add JWT authentication to your e-commerce REST API.',
  },
  {
    step: 9,
    title: 'Advanced Databases: Redis & MongoDB',
    roadmapType: 'database',
    icon: '⚡',
    color: '#f43f5e',
    duration: '3–4 weeks',
    why: 'Modern systems use caching (Redis) and document stores (MongoDB) alongside SQL. Know when to use each.',
    phaseFilter: (p) => p.roadmapType === 'database' && p.id >= 13,
    skills: ['Redis: caching, pub/sub, session storage', 'Spring Cache with @Cacheable', 'MongoDB documents, collections, queries', 'Spring Data MongoDB', 'When to use SQL vs NoSQL'],
    milestone: 'Add Redis caching to reduce API response time by 80%.',
  },
  {
    step: 10,
    title: 'Docker & CI/CD Pipelines',
    roadmapType: 'devops',
    icon: '🐳',
    color: '#0ea5e9',
    duration: '3–4 weeks',
    why: 'You cannot deploy modern apps without containers. Docker + CI/CD is a must for any backend role.',
    phaseFilter: (p) => p.roadmapType === 'devops' && p.id >= 6 && p.id <= 12,
    skills: ['Write Dockerfile for Spring Boot', 'Docker Compose for multi-service apps', 'GitHub Actions CI/CD pipeline', 'Build, test, push to registry', 'Environment-specific configs'],
    milestone: 'Deploy your Spring app via Docker + automated GitHub Actions pipeline.',
  },
  {
    step: 11,
    title: 'Cloud & Kubernetes',
    roadmapType: 'devops',
    icon: '☁️',
    color: '#f59e0b',
    duration: '4–6 weeks',
    why: 'AWS/GCP and Kubernetes are the backbone of large-scale production systems.',
    phaseFilter: (p) => p.roadmapType === 'devops' && p.id >= 13,
    skills: ['AWS EC2, S3, RDS, IAM', 'Terraform Infrastructure as Code', 'Kubernetes: Pods, Deployments, Services', 'Helm charts', 'Observability: Prometheus + Grafana'],
    milestone: 'Deploy your microservices app on Kubernetes (Minikube or EKS).',
  },
  {
    step: 12,
    title: 'Microservices & System Design',
    roadmapType: 'backend',
    icon: '🌐',
    color: '#10b981',
    duration: '6–8 weeks',
    why: 'Senior engineers design systems. Understanding distributed systems, Kafka, and microservices patterns is required.',
    phaseFilter: (p) => p.roadmapType === 'backend' && p.id >= 18,
    skills: ['Microservices vs Monolith trade-offs', 'Spring Cloud: Eureka, Gateway, Config', 'Apache Kafka for event streaming', 'Saga, Circuit Breaker, CQRS patterns', 'System design interviews'],
    milestone: 'Build a 3-service microservices system with Kafka and an API Gateway.',
  },
];

// ─── Step Card ────────────────────────────────────────────────────────────────
const SequenceStep = ({ step, completedTopics, allTopics, isUnlocked, navigate }) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = TYPE_ICONS[step.roadmapType] || Globe;

  // Count topics in this step's phases
  const stepTopics = useMemo(() => {
    const stepPhases = PHASES.filter(step.phaseFilter);
    return stepPhases.flatMap(p => p.topics);
  }, [step]);

  const done = stepTopics.filter(t => completedTopics.includes(t.id)).length;
  const total = stepTopics.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const isComplete = pct === 100 && total > 0;
  const isStarted = done > 0;

  const status = isComplete ? 'complete' : isStarted ? 'active' : isUnlocked ? 'unlocked' : 'locked';

  return (
    <div className={`seq-step ${status}`} style={{ '--seq-color': step.color }}>
      {/* Connector line */}
      <div className="seq-connector">
        <div className={`seq-line ${isComplete ? 'filled' : ''}`} style={isComplete ? { background: step.color } : {}} />
        <div className="seq-node" style={{
          borderColor: step.color,
          background: isComplete ? step.color : isStarted ? `${step.color}20` : 'var(--bg-elevated)',
          color: isComplete ? 'white' : step.color,
        }}>
          {isComplete ? <CheckCircle2 size={18} /> : <span className="seq-node-num">{step.step}</span>}
        </div>
      </div>

      {/* Content */}
      <div className="seq-content">
        <div className="seq-header" onClick={() => setExpanded(!expanded)}>
          <div className="seq-header-left">
            <div className="seq-step-meta">
              <span className="seq-icon">{step.icon}</span>
              <span className="seq-rm-badge" style={{ color: step.color, background: `${step.color}15` }}>
                <Icon size={11} /> {ROADMAP_TYPES[step.roadmapType]?.label}
              </span>
              <span className="seq-duration"><Clock size={11} /> {step.duration}</span>
            </div>
            <h3 className="seq-title">{step.title}</h3>
            {total > 0 && (
              <div className="seq-progress">
                <div className="seq-prog-bar">
                  <div className="seq-prog-fill" style={{ width: `${pct}%`, background: step.color }} />
                </div>
                <span className="seq-prog-txt">{done}/{total} topics • {pct}%</span>
              </div>
            )}
          </div>
          <div className="seq-header-right">
            {status === 'locked' && <Lock size={16} style={{ color: 'var(--text-muted)' }} />}
            {status === 'complete' && <CheckCircle2 size={20} style={{ color: step.color }} />}
            <ChevronRight size={16} className={`seq-chevron ${expanded ? 'rotated' : ''}`} />
          </div>
        </div>

        {expanded && (
          <div className="seq-body">
            {/* Why */}
            <div className="seq-why">
              <span className="seq-why-icon">💡</span>
              <p>{step.why}</p>
            </div>

            {/* Skills */}
            <div className="seq-skills">
              <div className="seq-section-title">What you will learn:</div>
              <ul className="seq-skill-list">
                {step.skills.map((s, i) => (
                  <li key={i}><ChevronRight size={12} style={{ color: step.color }} /> {s}</li>
                ))}
              </ul>
            </div>

            {/* Milestone */}
            <div className="seq-milestone">
              <Target size={13} style={{ color: step.color }} />
              <span><strong>Milestone:</strong> {step.milestone}</span>
            </div>

            {/* Topics in this step */}
            {stepTopics.length > 0 && (
              <div className="seq-topics">
                <div className="seq-section-title">Topics in this step ({stepTopics.length}):</div>
                <div className="seq-topic-grid">
                  {stepTopics.slice(0, 8).map(t => {
                    const isDone = completedTopics.includes(t.id);
                    return (
                      <div
                        key={t.id}
                        className={`seq-topic-pill ${isDone ? 'done' : ''}`}
                        onClick={() => navigate(`/topics/${t.id}`)}
                      >
                        {isDone ? <CheckCircle2 size={12} style={{ color: '#10b981' }} /> : <Circle size={12} />}
                        <span>{t.title}</span>
                      </div>
                    );
                  })}
                  {stepTopics.length > 8 && (
                    <div className="seq-topic-pill more" onClick={() => navigate('/topics')}>
                      +{stepTopics.length - 8} more topics →
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* CTA */}
            {stepTopics.length > 0 && (
              <button
                className="btn btn-primary seq-cta"
                style={{ background: step.color, borderColor: step.color }}
                onClick={() => {
                  const nextInStep = stepTopics.find(t => !completedTopics.includes(t.id));
                  if (nextInStep) navigate(`/topics/${nextInStep.id}`);
                  else navigate('/topics');
                }}
              >
                {isComplete ? <><BookOpen size={15} /> Review Topics</> : <><Play size={15} /> {isStarted ? 'Continue' : 'Start'} Step {step.step}</>}
                <ArrowRight size={15} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// ─── Main StudyPlan ────────────────────────────────────────────────────────────
const StudyPlan = () => {
  const navigate = useNavigate();
  const { completedTopics, selectedGoal, setSelectedGoal } = useProgressStore();
  const allTopics = useMemo(() => getAllTopics(), []);

  // Overall sequence progress
  const totalStepTopics = useMemo(() =>
    MASTER_SEQUENCE.reduce((s, step) => s + PHASES.filter(step.phaseFilter).flatMap(p => p.topics).length, 0),
    []
  );
  const doneStepTopics = useMemo(() =>
    MASTER_SEQUENCE.reduce((s, step) => {
      const topics = PHASES.filter(step.phaseFilter).flatMap(p => p.topics);
      return s + topics.filter(t => completedTopics.includes(t.id)).length;
    }, 0),
    [completedTopics]
  );

  // Current step = first step with < 100% completion
  const currentStepIdx = useMemo(() => {
    for (let i = 0; i < MASTER_SEQUENCE.length; i++) {
      const step = MASTER_SEQUENCE[i];
      const topics = PHASES.filter(step.phaseFilter).flatMap(p => p.topics);
      const done = topics.filter(t => completedTopics.includes(t.id)).length;
      if (done < topics.length || topics.length === 0) return i;
    }
    return MASTER_SEQUENCE.length - 1;
  }, [completedTopics]);

  return (
    <div className="study-plan-page">

      {/* ── Hero ── */}
      <div className="sp-hero animate-fade-in-up">
        <div className="sp-hero-text">
          <h1 className="section-title">🗺️ Structured Learning Path</h1>
          <p className="section-subtitle">
            {MASTER_SEQUENCE.length} steps in the optimal order — from Java basics to Microservices.
            No confusion, no skipping ahead.
          </p>
        </div>
        <div className="sp-hero-stats">
          <div className="sp-stat">
            <span className="sp-stat-val">{currentStepIdx + 1}</span>
            <span className="sp-stat-lbl">Current Step</span>
          </div>
          <div className="sp-stat">
            <span className="sp-stat-val" style={{ color: '#10b981' }}>{doneStepTopics}</span>
            <span className="sp-stat-lbl">Topics Done</span>
          </div>
          <div className="sp-stat">
            <span className="sp-stat-val" style={{ color: '#7c6ef7' }}>{totalStepTopics}</span>
            <span className="sp-stat-lbl">Total Topics</span>
          </div>
        </div>
      </div>

      {/* ── Overall progress bar ── */}
      <div className="sp-overall-bar animate-fade-in-up">
        <div className="sp-bar-track">
          <div className="sp-bar-fill" style={{ width: `${Math.round((doneStepTopics / totalStepTopics) * 100)}%` }} />
        </div>
        <span className="sp-bar-label">
          {Math.round((doneStepTopics / totalStepTopics) * 100)}% of learning path complete
        </span>
      </div>

      {/* ── Rule ── */}
      <div className="sp-rule animate-fade-in-up">
        <div className="sp-rule-icon">⚠️</div>
        <div className="sp-rule-text">
          <strong>Follow this sequence.</strong> Each step builds on the previous one.
          Do not jump to Spring Boot before completing SQL — you will struggle with JPA.
          Do not start Docker before understanding Git and Linux basics.
        </div>
      </div>

      {/* ── Sequence ── */}
      <div className="seq-list animate-fade-in-up">
        {MASTER_SEQUENCE.map((step, idx) => (
          <SequenceStep
            key={step.step}
            step={step}
            completedTopics={completedTopics}
            allTopics={allTopics}
            isUnlocked={idx <= currentStepIdx + 1}
            navigate={navigate}
          />
        ))}
      </div>

      {/* ── Goal Tracks ── */}
      <div className="sp-goals animate-fade-in-up">
        <h2 className="section-title" style={{ marginBottom: 'var(--space-2)' }}>Career Goal Tracks</h2>
        <p className="section-subtitle" style={{ marginBottom: 'var(--space-5)' }}>
          Choose a goal to get a focused subset of the path above.
        </p>
        <div className="goal-grid">
          {Object.entries(GOAL_TRACKS).map(([key, goal]) => {
            const isSelected = selectedGoal === key;
            const goalTopics = PHASES.filter(p => goal.phaseIds.includes(p.id)).flatMap(p => p.topics);
            const goalDone = goalTopics.filter(t => completedTopics.includes(t.id)).length;
            const pct = goalTopics.length > 0 ? Math.round((goalDone / goalTopics.length) * 100) : 0;
            return (
              <div
                key={key}
                className={`goal-card ${isSelected ? 'selected' : ''}`}
                style={{ '--goal-color': goal.color, borderColor: isSelected ? goal.color : 'var(--border)' }}
                onClick={() => setSelectedGoal(key)}
              >
                <div className="goal-card-top">
                  <span className="goal-icon">{goal.icon}</span>
                  {isSelected && <CheckCircle2 size={18} style={{ color: goal.color }} />}
                </div>
                <div className="goal-title">{goal.title}</div>
                <div className="goal-desc">{goal.description}</div>
                <div className="goal-prog-bar">
                  <div className="goal-prog-fill" style={{ width: `${pct}%`, background: goal.color }} />
                </div>
                <div className="goal-prog-txt">{goalDone}/{goalTopics.length} topics • {pct}%</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StudyPlan;
