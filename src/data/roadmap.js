// ============================================================
// ROADMAP DATA — Dynamically driven from generated phases
// ============================================================

import { PHASES } from './roadmap-generated.js';
export { PHASES };

// ─── Helpers ──────────────────────────────────────────────────────────────────
export const getAllTopics   = () => PHASES.flatMap(p => p.topics);
export const getTopicById  = (id) => getAllTopics().find(t => t.id === id);
export const getTotalXP    = () => getAllTopics().reduce((s, t) => s + (t.xp || 0), 0);
export const getPhasesByType = (type) => type === 'all' ? PHASES : PHASES.filter(p => p.roadmapType === type);
export const getTopicsByType = (type) => getPhasesByType(type).flatMap(p => p.topics);

// ─── Difficulty Config ────────────────────────────────────────────────────────
export const DIFFICULTY_CONFIG = {
  beginner:     { icon: '🌱', color: 'var(--accent-green)',   label: 'Beginner'     },
  intermediate: { icon: '🔥', color: 'var(--accent-gold)',    label: 'Intermediate' },
  advanced:     { icon: '🚀', color: 'var(--accent-cyan)',    label: 'Advanced'     },
  expert:       { icon: '⭐', color: 'var(--accent-rose)',    label: 'Expert'       },
};

// ─── Roadmap Types ─────────────────────────────────────────────────────────────
export const ROADMAP_TYPES = {
  backend:  { label: 'Backend',  icon: '⚙️',  color: '#7c6ef7', badge: 'Spring / Java',  desc: 'Spring Boot, REST APIs, JPA, Security and Microservices' },
  database: { label: 'Database', icon: '🗄️',  color: '#06b6d4', badge: 'SQL / NoSQL',    desc: 'SQL, PostgreSQL, Redis, MongoDB and query optimization'   },
  devops:   { label: 'DevOps',   icon: '🚀',  color: '#f59e0b', badge: 'CI/CD / Cloud',  desc: 'Linux, Docker, Kubernetes, CI/CD and cloud platforms'     },
  others:   { label: 'Others',   icon: '🌐',  color: '#10b981', badge: 'Tools & More',   desc: 'DSA, Git, system design, interview preparation and more'  },
};

// ─── Goal Tracks (driven from real phase IDs) ─────────────────────────────────
const backendPhaseIds  = PHASES.filter(p => p.roadmapType === 'backend').map(p => p.id);
const dbPhaseIds       = PHASES.filter(p => p.roadmapType === 'database').map(p => p.id);
const devopsPhaseIds   = PHASES.filter(p => p.roadmapType === 'devops').map(p => p.id);
const othersPhaseIds   = PHASES.filter(p => p.roadmapType === 'others').map(p => p.id);

// Pick first N topics of a type as "recommended"
const pickRecommended = (type, n = 10) =>
  getTopicsByType(type).filter(t => t.difficulty === 'beginner' || t.difficulty === 'intermediate').slice(0, n).map(t => t.id);

export const GOAL_TRACKS = {
  backend: {
    id: 'backend',
    title: 'Java Backend Developer',
    icon: '⚙️',
    color: '#7c6ef7',
    description: 'Master Spring Boot, REST APIs, databases, security and microservices.',
    phaseIds: [...backendPhaseIds, ...dbPhaseIds.slice(0, 5)],
    recommendedTopicIds: pickRecommended('backend', 12),
  },
  devops: {
    id: 'devops',
    title: 'DevOps Engineer',
    icon: '🚀',
    color: '#f59e0b',
    description: 'Learn Docker, Kubernetes, CI/CD pipelines and cloud deployments.',
    phaseIds: devopsPhaseIds,
    recommendedTopicIds: pickRecommended('devops', 10),
  },
  database: {
    id: 'database',
    title: 'Database Engineer',
    icon: '🗄️',
    color: '#06b6d4',
    description: 'Deep dive into SQL, PostgreSQL, Redis, MongoDB and query optimization.',
    phaseIds: dbPhaseIds,
    recommendedTopicIds: pickRecommended('database', 10),
  },
  fullstack: {
    id: 'fullstack',
    title: 'Full-Stack Engineer',
    icon: '🌐',
    color: '#10b981',
    description: 'Cover backend, database and DevOps to become a complete engineer.',
    phaseIds: [...backendPhaseIds, ...dbPhaseIds, ...othersPhaseIds],
    recommendedTopicIds: [
      ...pickRecommended('backend', 5),
      ...pickRecommended('database', 3),
      ...pickRecommended('others', 2),
    ],
  },
};

// ─── Projects (driven from roadmap topics) ────────────────────────────────────
export const PROJECTS = {
  beginner: [
    {
      id: 'p-calc', title: 'CLI Calculator',
      description: 'Build a command-line calculator that performs add, subtract, multiply, divide with a loop until the user exits.',
      skills: ['Variables', 'Operators', 'Scanner', 'Loops', 'Switch'], xp: 500, hours: 2,
      roadmapType: 'others', techStack: ['Java', 'CLI'],
      steps: ['Handle user input with Scanner', 'Use switch/if for operations', 'Loop until exit command', 'Handle division by zero'],
    },
    {
      id: 'p-guess', title: 'Number Guessing Game',
      description: 'The computer picks a random number 1-100. User guesses with "Too high" / "Too low" hints. Count attempts.',
      skills: ['Random', 'While Loops', 'If-Else'], xp: 500, hours: 2,
      roadmapType: 'others', techStack: ['Java', 'CLI'],
      steps: ['Generate random number with Math.random()', 'Loop for guesses', 'Give hints', 'Count attempts and display result'],
    },
    {
      id: 'p-todo', title: 'Console To-Do List',
      description: 'Console app to manage tasks: view, add, mark done, remove. Uses ArrayList for in-memory storage.',
      skills: ['ArrayList', 'Methods', 'Loops', 'String'], xp: 800, hours: 3,
      roadmapType: 'others', techStack: ['Java', 'CLI'],
      steps: ['Design task model', 'Implement CRUD operations', 'Menu-driven interface', 'Persist with simple file I/O'],
    },
    {
      id: 'p-bank', title: 'Bank Account System',
      description: 'Simulate a bank with deposit, withdraw, transfer and balance check. Includes OOP design with inheritance.',
      skills: ['OOP', 'Encapsulation', 'Inheritance', 'Exception Handling'], xp: 900, hours: 4,
      roadmapType: 'backend', techStack: ['Java', 'OOP'],
      steps: ['Create Account base class', 'Extend to SavingsAccount and CurrentAccount', 'Handle overdraft exceptions', 'Write unit tests'],
    },
  ],
  intermediate: [
    {
      id: 'p-lib', title: 'Library Management System',
      description: 'OOP system to manage books and members: borrow, return, search, availability check with limits enforcement.',
      skills: ['Classes', 'Encapsulation', 'Collections', 'File I/O'], xp: 1500, hours: 6,
      roadmapType: 'backend', techStack: ['Java', 'OOP'],
      steps: ['Design Book and Member classes', 'Implement borrow/return logic', 'Search by title/author', 'Persist data to file'],
    },
    {
      id: 'p-atm', title: 'ATM Simulator',
      description: 'Full ATM simulation with PIN validation, balance check, withdraw, deposit and transfer. Exception-driven design.',
      skills: ['Exception Handling', 'OOP', 'Input Validation'], xp: 1200, hours: 5,
      roadmapType: 'backend', techStack: ['Java', 'OOP'],
      steps: ['PIN authentication with lockout', 'Balance operations', 'Transaction history', 'Custom exceptions for each error'],
    },
    {
      id: 'p-rest-basic', title: 'Spring Boot REST API (Basics)',
      description: 'Create a full CRUD REST API for a Product catalog using Spring Boot, Spring Data JPA and H2 in-memory database.',
      skills: ['Spring Boot', 'Spring MVC', 'JPA', 'REST'], xp: 2000, hours: 8,
      roadmapType: 'backend', techStack: ['Spring Boot', 'JPA', 'H2'],
      steps: ['Set up Spring Initializr project', 'Create Product entity and repository', 'Build CRUD endpoints', 'Test with Postman'],
    },
    {
      id: 'p-sql-queries', title: 'SQL Query Practice App',
      description: 'Build a Java CLI that connects to PostgreSQL and runs complex queries: joins, aggregates, window functions.',
      skills: ['JDBC', 'SQL', 'PostgreSQL', 'Transactions'], xp: 1500, hours: 6,
      roadmapType: 'database', techStack: ['Java', 'JDBC', 'PostgreSQL'],
      steps: ['Design schema with 3+ tables', 'Write INNER JOIN queries', 'Add aggregate queries', 'Implement transaction rollback'],
    },
  ],
  advanced: [
    {
      id: 'p-chat', title: 'Multi-Client Chat Server',
      description: 'Real-time chat using Java Sockets. Server handles multiple clients simultaneously using threads.',
      skills: ['Sockets', 'Multithreading', 'I/O Streams', 'Concurrency'], xp: 3000, hours: 10,
      roadmapType: 'backend', techStack: ['Java', 'Sockets', 'Threads'],
      steps: ['Create ServerSocket and accept connections', 'Thread per client', 'Broadcast messages', 'Handle disconnection gracefully'],
    },
    {
      id: 'p-spring-security', title: 'Spring Security + JWT API',
      description: 'Secure REST API with JWT authentication, role-based authorization, refresh tokens and Spring Security 7.',
      skills: ['Spring Security', 'JWT', 'OAuth2', 'BCrypt'], xp: 3500, hours: 12,
      roadmapType: 'backend', techStack: ['Spring Boot', 'Spring Security', 'JWT'],
      steps: ['Configure SecurityFilterChain', 'Implement JwtFilter', 'Create /auth/login endpoint', 'Add @PreAuthorize roles'],
    },
    {
      id: 'p-docker-compose', title: 'Dockerized Spring App',
      description: 'Containerize a Spring Boot app with Docker, write docker-compose with PostgreSQL and Redis services.',
      skills: ['Docker', 'Docker Compose', 'Environment Config', 'Networking'], xp: 2500, hours: 8,
      roadmapType: 'devops', techStack: ['Docker', 'Docker Compose', 'Spring Boot'],
      steps: ['Write Dockerfile for Spring app', 'Create docker-compose.yml', 'Add PostgreSQL and Redis services', 'Test with health checks'],
    },
    {
      id: 'p-db-optimization', title: 'Database Query Optimization',
      description: 'Analyze slow queries using EXPLAIN ANALYZE, add proper indexes, and reduce query time by 10x on large datasets.',
      skills: ['PostgreSQL', 'Indexes', 'Query Plans', 'Partitioning'], xp: 2800, hours: 10,
      roadmapType: 'database', techStack: ['PostgreSQL', 'pgAdmin'],
      steps: ['Load 1M row dataset', 'Run EXPLAIN ANALYZE on slow queries', 'Create B-tree and composite indexes', 'Measure improvement'],
    },
  ],
  expert: [
    {
      id: 'p-spring-ecommerce', title: 'E-Commerce REST API',
      description: 'Full-stack Spring Boot backend: JWT auth, product catalog, cart, order management, payments integration with Spring Data JPA.',
      skills: ['Spring Boot', 'Spring Security', 'JPA', 'RESTful Design', 'Redis'], xp: 5000, hours: 20,
      roadmapType: 'backend', techStack: ['Spring Boot', 'PostgreSQL', 'Redis', 'JWT'],
      steps: ['Design domain model', 'Implement JWT + OAuth2', 'Build product/cart/order APIs', 'Add Redis caching', 'Write integration tests'],
    },
    {
      id: 'p-microservices', title: 'Microservices with Spring Cloud',
      description: 'Build 3 microservices (User, Product, Order) with API Gateway, service discovery, distributed tracing and messaging via Kafka.',
      skills: ['Spring Cloud', 'Kafka', 'API Gateway', 'Eureka', 'Zipkin'], xp: 7000, hours: 30,
      roadmapType: 'backend', techStack: ['Spring Cloud', 'Kafka', 'Docker', 'Kubernetes'],
      steps: ['Create 3 services', 'Add Eureka discovery', 'Set up API Gateway', 'Connect Kafka for events', 'Deploy on Kubernetes'],
    },
    {
      id: 'p-cicd-pipeline', title: 'Full CI/CD Pipeline',
      description: 'Build a GitHub Actions pipeline that tests, builds, containerizes and deploys a Spring Boot app to AWS ECS automatically.',
      skills: ['GitHub Actions', 'Docker', 'AWS ECS', 'Terraform', 'Secrets'], xp: 5500, hours: 20,
      roadmapType: 'devops', techStack: ['GitHub Actions', 'Docker', 'AWS', 'Terraform'],
      steps: ['Write GitHub Actions workflow', 'Add test and build stages', 'Push to ECR', 'Deploy to ECS with Terraform'],
    },
    {
      id: 'p-web-server', title: 'Custom HTTP Web Server',
      description: 'From scratch in Java: listen on a port, parse raw HTTP requests, route to handlers, return proper HTTP responses.',
      skills: ['Sockets', 'HTTP Protocol', 'Concurrency', 'Architecture'], xp: 6000, hours: 25,
      roadmapType: 'backend', techStack: ['Java', 'Sockets', 'HTTP'],
      steps: ['Parse HTTP request headers', 'Route by method + path', 'Thread pool for concurrency', 'Support GET and POST'],
    },
  ],
};

// ─── Learning Sequence (dynamically built from roadmap types) ─────────────────
export const LEARNING_SEQUENCE = [
  {
    stage: 1, focus: 'Core Java & OOP',
    detail: 'Variables, control flow, classes, collections, exceptions',
    weeks: '4-6', project: 'CLI Calculator + Bank Account',
    roadmapType: 'others', icon: '☕',
  },
  {
    stage: 2, focus: 'Database Fundamentals',
    detail: 'SQL, PostgreSQL, JDBC, basic queries, transactions',
    weeks: '3-4', project: 'SQL Query Practice App',
    roadmapType: 'database', icon: '🗄️',
  },
  {
    stage: 3, focus: 'Spring Boot Basics',
    detail: 'IoC, Dependency Injection, REST APIs, Spring Data JPA',
    weeks: '4-6', project: 'Spring Boot REST API',
    roadmapType: 'backend', icon: '⚙️',
  },
  {
    stage: 4, focus: 'Spring Security & Testing',
    detail: 'JWT, OAuth2, unit tests, integration tests, Testcontainers',
    weeks: '3-4', project: 'Secure E-Commerce API',
    roadmapType: 'backend', icon: '🔒',
  },
  {
    stage: 5, focus: 'DevOps & Cloud',
    detail: 'Docker, CI/CD, GitHub Actions, AWS basics, Kubernetes intro',
    weeks: '4-5', project: 'CI/CD Pipeline',
    roadmapType: 'devops', icon: '🚀',
  },
  {
    stage: 6, focus: 'Advanced Databases',
    detail: 'Redis, MongoDB, query optimization, replication, sharding',
    weeks: '3-4', project: 'Database Optimization',
    roadmapType: 'database', icon: '⚡',
  },
  {
    stage: 7, focus: 'Microservices & System Design',
    detail: 'Spring Cloud, Kafka, API Gateway, distributed patterns',
    weeks: '6-8', project: 'Microservices Platform',
    roadmapType: 'backend', icon: '🌐',
  },
];