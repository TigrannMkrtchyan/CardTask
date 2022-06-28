import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CardService from './utils/services/CardService';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardService>
      <App />
    </CardService>
  </React.StrictMode>
);
