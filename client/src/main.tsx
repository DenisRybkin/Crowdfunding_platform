import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './assets/styles/globals.css';
import './assets/styles/index.css';
import { RootProvider } from './providers';

const root = createRoot(document.getElementById('root')!);
root.render(
  <RootProvider>
    <App />
  </RootProvider>
);
