import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  LayoutDashboard, Map, BookOpen, FolderGit2, Trophy, Calendar,
  Terminal, Settings, ChevronLeft, ChevronRight, Coffee, Search,
  Flame, Star, ListOrdered
} from 'lucide-react';
import useSettingsStore from '../../store/useSettingsStore';
import useProgressStore from '../../store/useProgressStore';
import { PHASES } from '../../data/roadmap';
import './Sidebar.css';

const NavItem = ({ to, icon: Icon, label, collapsed, badge }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));

  return (
    <NavLink to={to} className={`sidebar-nav-item ${isActive ? 'active' : ''} ${collapsed ? 'collapsed' : ''}`} title={collapsed ? label : undefined}>
      <span className="nav-icon">
        <Icon size={18} />
      </span>
      {!collapsed && <span className="nav-label">{label}</span>}
      {!collapsed && badge && <span className="nav-badge">{badge}</span>}
    </NavLink>
  );
};

const PhaseProgressMini = ({ phaseId, collapsed, getPhaseProgress }) => {
  const phase = PHASES.find(p => p.id === phaseId);
  if (!phase) return null;
  const { completed, total, percentage } = getPhaseProgress(phaseId);
  if (total === 0) return null;

  return (
    <div className={`phase-mini ${collapsed ? 'hidden' : ''}`}>
      <div className="phase-mini-header">
        <span className="phase-mini-icon">{phase.icon}</span>
        <span className="phase-mini-label">{phase.title}</span>
        <span className="phase-mini-count">{completed}/{total}</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percentage}%`, background: phase.color }} />
      </div>
    </div>
  );
};

const Sidebar = () => {
  const { t } = useTranslation();
  const { sidebarCollapsed, toggleSidebar } = useSettingsStore();
  const { streak, totalXP, getPhaseProgress, getOverallProgress, getLevel, completedProjects } = useProgressStore();
  const [topPhases, setTopPhases] = useState([]);

  const overall = getOverallProgress();
  const level = getLevel();

  const navItems = [
    { to: '/', icon: LayoutDashboard, label: t('nav.dashboard') },
    { to: '/roadmap', icon: Map, label: t('nav.roadmap') },
    { to: '/topics', icon: BookOpen, label: t('nav.topics') },
    { to: '/projects', icon: FolderGit2, label: t('nav.projects'), badge: completedProjects?.length > 0 ? completedProjects.length : null },
    { to: '/achievements', icon: Trophy, label: t('nav.achievements') },
    { to: '/leaderboard', icon: ListOrdered, label: 'Leaderboard' },
    { to: '/study-plan', icon: Calendar, label: t('nav.studyPlan') },
    { to: '/code-runner', icon: Terminal, label: t('nav.codeRunner') },
  ];

  useEffect(() => {
    // Find phases with progress
    const activePhasesIds = PHASES
      .map(p => ({ id: p.id, ...getPhaseProgress(p.id) }))
      .filter(p => p.completed > 0 && p.completed < p.total)
      .slice(0, 3)
      .map(p => p.id);
    setTopPhases(activePhasesIds);
  }, []);

  return (
    <aside className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-icon">
          <Coffee size={sidebarCollapsed ? 22 : 24} />
        </div>
        {!sidebarCollapsed && (
          <div className="logo-text">
            <span className="logo-name">JavaPath</span>
            <span className="logo-tagline">Learn Java</span>
          </div>
        )}
      </div>

      {/* XP / Level mini card */}
      {!sidebarCollapsed && (
        <div className="sidebar-level-card">
          <div className="level-header">
            <Star size={14} />
            <span>Lv {level.level} • {level.title}</span>
          </div>
          <div className="level-xp">{totalXP.toLocaleString()} XP</div>
          <div className="progress-bar" style={{ height: 4 }}>
            <div className="progress-fill" style={{
              width: `${Math.min(100, ((totalXP - (level.level === 1 ? 0 : 500)) / (level.next - (level.level === 1 ? 0 : 500))) * 100)}%`
            }} />
          </div>
        </div>
      )}

      {/* Streak mini */}
      {streak > 0 && !sidebarCollapsed && (
        <div className="sidebar-streak">
          <Flame size={14} className="animate-fire" style={{ color: '#ff6b35' }} />
          <span>{streak} day streak</span>
        </div>
      )}

      {/* Navigation */}
      <nav className="sidebar-nav">
        <div className="nav-section">
          {!sidebarCollapsed && <span className="nav-section-label">Main</span>}
          {navItems.map(item => (
            <NavItem key={item.to} {...item} collapsed={sidebarCollapsed} />
          ))}
        </div>

        {/* Phase progress */}
        {topPhases.length > 0 && !sidebarCollapsed && (
          <div className="nav-section">
            <span className="nav-section-label">Active Phases</span>
            {topPhases.map(id => (
              <PhaseProgressMini
                key={id}
                phaseId={id}
                collapsed={sidebarCollapsed}
                getPhaseProgress={getPhaseProgress}
              />
            ))}
          </div>
        )}

        {/* Settings at bottom */}
        <div className="nav-section sidebar-bottom">
          <NavItem to="/settings" icon={Settings} label={t('nav.settings')} collapsed={sidebarCollapsed} />
        </div>
      </nav>

      {/* Overall progress at bottom */}
      {!sidebarCollapsed && (
        <div className="sidebar-overall">
          <div className="overall-header">
            <span>Overall Progress</span>
            <span>{overall.percentage}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${overall.percentage}%` }} />
          </div>
          <div className="overall-count">{overall.completed}/{overall.total} topics</div>
        </div>
      )}

      {/* Collapse button */}
      <button className="sidebar-toggle" onClick={toggleSidebar} title={sidebarCollapsed ? 'Expand' : 'Collapse'}>
        {sidebarCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
    </aside>
  );
};

export default Sidebar;