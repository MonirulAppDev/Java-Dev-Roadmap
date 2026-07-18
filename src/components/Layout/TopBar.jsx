import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Search, Sun, Moon, Bell, Menu, X, Command } from 'lucide-react';
import useSettingsStore from '../../store/useSettingsStore';
import useProgressStore from '../../store/useProgressStore';
import { SUPPORTED_LANGUAGES } from '../../i18n';
import { getAllTopics } from '../../data/roadmap';
import './TopBar.css';

const TopBar = ({ onMobileMenuToggle, mobileMenuOpen }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { theme, toggleTheme, language, setLanguage } = useSettingsStore();
  const { markLanguageSwitched } = useProgressStore();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const searchRef = useRef(null);

  const currentLang = SUPPORTED_LANGUAGES.find(l => l.code === language);

  // Keyboard shortcut Ctrl+K
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
        setTimeout(() => searchRef.current?.focus(), 100);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const handleSearch = (q) => {
    setSearchQuery(q);
    if (!q.trim()) { setSearchResults([]); return; }
    const all = getAllTopics();
    const results = all.filter(t =>
      t.title.toLowerCase().includes(q.toLowerCase()) ||
      t.tags?.some(tag => tag.toLowerCase().includes(q.toLowerCase()))
    ).slice(0, 6);
    setSearchResults(results);
  };

  const handleLangChange = (code) => {
    setLanguage(code);
    i18n.changeLanguage(code);
    markLanguageSwitched();
    setLangMenuOpen(false);
  };

  return (
    <header className="topbar">
      {/* Mobile menu toggle */}
      <button className="btn-icon topbar-menu-btn" onClick={onMobileMenuToggle}>
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Search */}
      <div className={`topbar-search ${searchOpen ? 'open' : ''}`} onClick={() => setSearchOpen(true)}>
        <Search size={16} />
        {searchOpen ? (
          <input
            ref={searchRef}
            className="search-input"
            placeholder={t('nav.search')}
            value={searchQuery}
            onChange={e => handleSearch(e.target.value)}
            autoFocus
          />
        ) : (
          <span className="search-placeholder">
            {t('nav.search')}
            <span className="search-shortcut">
              <Command size={10} /> K
            </span>
          </span>
        )}
        {searchOpen && searchResults.length > 0 && (
          <div className="search-dropdown">
            {searchResults.map(topic => (
              <button
                key={topic.id}
                className="search-result-item"
                onClick={() => {
                  navigate(`/topics/${topic.id}`);
                  setSearchOpen(false);
                  setSearchQuery('');
                  setSearchResults([]);
                }}
              >
                <span className="result-title">{topic.title}</span>
                <span className="result-meta">Topic #{topic.number}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="topbar-actions">
        {/* Language Switcher */}
        <div className="lang-switcher">
          <button className="btn-icon lang-btn" onClick={() => setLangMenuOpen(!langMenuOpen)}>
            <span className="lang-code">{currentLang?.code.toUpperCase()}</span>
          </button>
          {langMenuOpen && (
            <div className="lang-dropdown">
              {SUPPORTED_LANGUAGES.map(lang => (
                <button
                  key={lang.code}
                  className={`lang-option ${lang.code === language ? 'active' : ''}`}
                  onClick={() => handleLangChange(lang.code)}
                >
                  <span>{lang.nativeName}</span>
                  <span className="lang-english-name">{lang.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Theme Toggle */}
        <button className="btn-icon theme-btn" onClick={toggleTheme} title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}>
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      {/* Click outside to close */}
      {(searchOpen || langMenuOpen) && (
        <div
          className="topbar-backdrop"
          onClick={() => { setSearchOpen(false); setLangMenuOpen(false); setSearchQuery(''); setSearchResults([]); }}
        />
      )}
    </header>
  );
};

export default TopBar;