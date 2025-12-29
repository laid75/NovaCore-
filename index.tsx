
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log("NovaCore: Initializing React Application...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("NovaCore Error: Could not find root element to mount to.");
} else {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("NovaCore: React Application Mounted Successfully.");
}
