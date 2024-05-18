import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App'; // Assuming App is your main component

// Replace ReactDOM.render with createRoot
const root = createRoot(document.getElementById('root'));

// Render your application inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
