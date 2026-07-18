import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/Layout/AppLayout';

// Lazy-load pages
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Roadmap = lazy(() => import('./pages/Roadmap'));
const TopicList = lazy(() => import('./pages/TopicList'));
const TopicDetail = lazy(() => import('./pages/TopicDetail'));
const Projects = lazy(() => import('./pages/Projects'));
const Achievements = lazy(() => import('./pages/Achievements'));
const StudyPlan = lazy(() => import('./pages/StudyPlan'));
const CodeRunner = lazy(() => import('./pages/CodeRunner'));
const Settings = lazy(() => import('./pages/Settings'));
const Leaderboard = lazy(() => import('./pages/Leaderboard'));

const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60vh',
    flexDirection: 'column',
    gap: '1rem',
    color: 'var(--text-muted)',
  }}>
    <div style={{
      width: 48, height: 48,
      border: '3px solid var(--border)',
      borderTopColor: 'var(--accent-primary)',
      borderRadius: '50%',
      animation: 'spin 0.7s linear infinite',
    }} />
    <span style={{ fontSize: 'var(--text-sm)' }}>Loading...</span>
  </div>
);

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="roadmap" element={<Roadmap />} />
            <Route path="topics" element={<TopicList />} />
            <Route path="topics/:topicId" element={<TopicDetail />} />
            <Route path="projects" element={<Projects />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="study-plan" element={<StudyPlan />} />
            <Route path="code-runner" element={<CodeRunner />} />
            <Route path="settings" element={<Settings />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            {/* 404 fallback */}
            <Route path="*" element={
              <div style={{ textAlign: 'center', padding: 'var(--space-16)', color: 'var(--text-muted)' }}>
                <div style={{ fontSize: '4rem', marginBottom: 'var(--space-4)' }}>☕</div>
                <h2 style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}>Page Not Found</h2>
                <p>This page doesn't exist. Go back to the dashboard.</p>
                <a href="/" style={{ color: 'var(--accent-primary-light)', marginTop: 'var(--space-4)', display: 'inline-block' }}>
                  ← Back to Dashboard
                </a>
              </div>
            } />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;