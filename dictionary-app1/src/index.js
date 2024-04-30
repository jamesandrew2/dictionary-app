import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM correctly
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Render the <App /> component to the root element
);

reportWebVitals();