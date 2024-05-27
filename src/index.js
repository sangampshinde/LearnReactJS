import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// METHOD-1 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
// METHOD-2



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


