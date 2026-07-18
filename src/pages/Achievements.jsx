import React from 'react';
import { useTranslation } from 'react-i18next';
import { ACHIEVEMENTS, RARITY_CONFIG } from '../data/achievements';
import useProgressStore from '../store/useProgressStore';
import { PHASES } from '../data/roadmap';
import './Achievements.css';

const AchievementCard = ({ achievement, unlocked }) => {
  const rarity = RARITY_CONFIG[achievement.rarity];

  return (
    <div className={`achievement-card ${unlocked ? 'unlocked' : 'locked'} rarity-${achievement.rarity}`}>
      <div className="achievement-icon-wrap" style={{ background: unlocked ? rarity.gradient : 'var(--bg-elevated)' }}>
        <span className="achievement-icon">{achievement.icon}</span>
        {!unlocked && <div className="achievement-lock">🔒</div>}
      </div>

      <div className="achievement-body">
        <div className="achievement-top">
          <h3 className="achievement-name">{achievement.title}</h3>
          <span className="rarity-badge" style={{
            color: unlocked ? rarity.color : 'var(--text-muted)',
            border: `1px solid ${unlocked ? rarity.color + '40' : 'var(--border)'}`,
            background: unlocked ? rarity.color + '15' : 'transparent',
          }}>
            {rarity.label}
          </span>
        </div>
        <p className="achievement-desc">{achievement.description}</p>
        {achievement.xpReward > 0 && (
          <div className="achievement-xp">+{achievement.xpReward} XP</div>
        )}
      </div>

      {unlocked && <div className="achievement-check">✓</div>}
    </div>
  );
};

const Achievements = () => {
  const { t } = useTranslation();
  const { unlockedAchievements } = useProgressStore();
  const [activeCategory, setActiveCategory] = React.useState('all');

  const categories = ['all', 'milestone', 'phase', 'streak', 'xp', 'practice', 'special'];

  const filteredAchievements = ACHIEVEMENTS.filter(a =>
    activeCategory === 'all' || a.category === activeCategory
  );

  const unlocked = unlockedAchievements.length;
  const total = ACHIEVEMENTS.length;

  return (
    <div className="achievements-page">
      {/* Header */}
      <div className="achievements-header animate-fade-in-up">
        <div>
          <h1 className="section-title">{t('achievements.title')}</h1>
          <p className="section-subtitle">{t('achievements.subtitle')}</p>
        </div>
        <div className="achievements-summary">
          <div className="summary-ring">
            <div className="ring-count">{unlocked}</div>
            <div className="ring-total">of {total}</div>
          </div>
          <div className="summary-label">Badges Earned</div>
        </div>
      </div>

      {/* Rarity legend */}
      <div className="rarity-legend animate-fade-in-up">
        {Object.entries(RARITY_CONFIG).map(([key, config]) => (
          <div key={key} className="rarity-item">
            <div className="rarity-dot" style={{ background: config.gradient }} />
            <span style={{ color: config.color, fontSize: 'var(--text-xs)' }}>{config.label}</span>
          </div>
        ))}
      </div>

      {/* Category Tabs */}
      <div className="category-tabs animate-fade-in-up">
        {categories.map(cat => (
          <button
            key={cat}
            className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat === 'all' ? 'All' : t(`achievements.category.${cat}`, { defaultValue: cat })}
            <span className="cat-count">
              {cat === 'all'
                ? ACHIEVEMENTS.length
                : ACHIEVEMENTS.filter(a => a.category === cat).length}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="achievements-grid stagger-children">
        {filteredAchievements.map(achievement => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
            unlocked={unlockedAchievements.includes(achievement.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
