import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Download, Trash2, AlertTriangle } from 'lucide-react';
import useSettingsStore from '../store/useSettingsStore';
import useProgressStore from '../store/useProgressStore';
import { SUPPORTED_LANGUAGES } from '../i18n';
import i18n from '../i18n';

const Settings = () => {
  const { t } = useTranslation();
  const { language, setLanguage, theme, setTheme } = useSettingsStore();
  const { getOverallProgress, getLevel, streak, totalXP, resetProgress, exportProgress, markLanguageSwitched } = useProgressStore();
  const [resetConfirm, setResetConfirm] = useState(false);

  const overall = getOverallProgress();
  const level = getLevel();

  const handleLangChange = (code) => {
    setLanguage(code);
    i18n.changeLanguage(code);
    markLanguageSwitched();
  };

  const handleReset = () => {
    if (resetConfirm) {
      resetProgress();
      setResetConfirm(false);
    } else {
      setResetConfirm(true);
      setTimeout(() => setResetConfirm(false), 5000);
    }
  };

  const SettingsSection = ({ title, children }) => (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
    }}>
      <div style={{
        padding: 'var(--space-5) var(--space-6)',
        borderBottom: '1px solid var(--border)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-semibold)',
        color: 'var(--text-secondary)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      }}>
        {title}
      </div>
      <div style={{ padding: 'var(--space-4) var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        {children}
      </div>
    </div>
  );

  const SettingsRow = ({ label, description, children }) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-6)' }}>
      <div>
        <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-primary)', marginBottom: '2px' }}>
          {label}
        </div>
        {description && <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{description}</div>}
      </div>
      {children}
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)', maxWidth: 700 }}>
      <div>
        <h1 className="section-title">{t('settings.title')}</h1>
        <p className="section-subtitle">{t('settings.subtitle')}</p>
      </div>

      {/* Profile Summary */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(124,110,247,0.1), rgba(6,182,212,0.05))',
        border: '1px solid rgba(124,110,247,0.2)',
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--space-6)',
        display: 'flex',
        gap: 'var(--space-6)',
        flexWrap: 'wrap',
      }}>
        {[
          { label: 'Level', value: `${level.level} • ${level.title}` },
          { label: 'Total XP', value: totalXP.toLocaleString() },
          { label: 'Streak', value: `${streak} days` },
          { label: 'Topics Done', value: `${overall.completed}/${overall.total}` },
        ].map(s => (
          <div key={s.label}>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: 4 }}>{s.label}</div>
            <div style={{ fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)', fontSize: 'var(--text-lg)' }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Appearance */}
      <SettingsSection title="Appearance">
        <SettingsRow label={t('settings.theme')} description="Choose light or dark interface">
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            {['dark', 'light'].map(th => (
              <button
                key={th}
                className={`btn ${theme === th ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: 'var(--space-2) var(--space-4)', fontSize: 'var(--text-xs)' }}
                onClick={() => setTheme(th)}
              >
                {th === 'dark' ? <Moon size={14} /> : <Sun size={14} />}
                {th === 'dark' ? t('settings.darkMode') : t('settings.lightMode')}
              </button>
            ))}
          </div>
        </SettingsRow>
      </SettingsSection>

      {/* Language */}
      <SettingsSection title={t('settings.language')}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 'var(--space-3)' }}>
          {SUPPORTED_LANGUAGES.map(lang => (
            <button
              key={lang.code}
              onClick={() => handleLangChange(lang.code)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                padding: 'var(--space-3) var(--space-4)',
                background: language === lang.code ? 'rgba(124,110,247,0.1)' : 'var(--bg-elevated)',
                border: `1px solid ${language === lang.code ? 'var(--accent-primary)' : 'var(--border)'}`,
                borderRadius: 'var(--radius-lg)',
                cursor: 'pointer',
                fontSize: 'var(--text-sm)',
                fontWeight: language === lang.code ? 'var(--weight-semibold)' : 'var(--weight-medium)',
                color: language === lang.code ? 'var(--accent-primary-light)' : 'var(--text-secondary)',
                transition: 'all 0.2s ease',
                textAlign: 'left',
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>{lang.flag}</span>
              <div>
                <div>{lang.nativeName}</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{lang.name}</div>
              </div>
            </button>
          ))}
        </div>
      </SettingsSection>

      {/* Data */}
      <SettingsSection title="Data & Privacy">
        <SettingsRow label={t('settings.exportProgress')} description="Download your progress as JSON">
          <button className="btn btn-secondary" style={{ padding: 'var(--space-2) var(--space-4)', fontSize: 'var(--text-sm)' }} onClick={exportProgress}>
            <Download size={14} />
            Export
          </button>
        </SettingsRow>

        <SettingsRow
          label={t('settings.resetProgress')}
          description={resetConfirm ? '⚠ Click again to confirm — this cannot be undone!' : 'Erase all progress and start fresh'}
        >
          <button
            className="btn"
            style={{
              padding: 'var(--space-2) var(--space-4)',
              fontSize: 'var(--text-sm)',
              background: resetConfirm ? '#dc2626' : 'rgba(220,38,38,0.1)',
              border: '1px solid rgba(220,38,38,0.3)',
              color: resetConfirm ? 'white' : '#f87171',
            }}
            onClick={handleReset}
          >
            {resetConfirm ? <AlertTriangle size={14} /> : <Trash2 size={14} />}
            {resetConfirm ? 'Confirm Reset' : 'Reset'}
          </button>
        </SettingsRow>
      </SettingsSection>

      {/* About */}
      <SettingsSection title="About">
        <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', textAlign: 'center', padding: 'var(--space-2) 0' }}>
          <div style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-2)' }}>☕</div>
          <div style={{ fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)' }}>JavaPath Learning Platform</div>
          <div style={{ color: 'var(--text-muted)', marginTop: 4 }}>Version 1.0.0 • Built with React + Vite</div>
          <div style={{ color: 'var(--text-muted)', marginTop: 4 }}>{t('settings.madeWith')}</div>
        </div>
      </SettingsSection>
    </div>
  );
};

export default Settings;
