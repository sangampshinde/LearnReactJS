// react routing #46

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import {BrowserRouter as Router,}from 'react-router-dom'
// // METHOD-1 
// // import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
// // METHOD-2

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Router>
//      <App />
//     </Router>
//   </React.StrictMode>
// );

// ================================================================================

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router,}from 'react-router-dom'
// METHOD-1 
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
// METHOD-2

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
