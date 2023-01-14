// Importing these modules, components and stylesheet so we can make use of their functionality inside our index.js file
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Grabbing our html element with an id of "root" an rendering our "App" element, which holds all of our content to display.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

