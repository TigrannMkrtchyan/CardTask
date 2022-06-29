import React from 'react';
import ReactDOM from 'react-dom/client';
import CardService from './utils/services/CardService';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardService>
      <App />
    </CardService>
  </React.StrictMode>
);
