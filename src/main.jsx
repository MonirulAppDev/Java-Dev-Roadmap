import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Styles — order matters!
import './styles/tokens.css';
import './styles/global.css';
import './styles/animations.css';

// i18n setup
import './i18n/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
