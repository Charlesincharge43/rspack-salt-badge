import React from 'react';
import { createRoot } from 'react-dom/client';
import '@salt-ds/theme/index.css'
import App from './App';



const root = createRoot(document.getElementById('root')!);
root.render(
  <App />
);