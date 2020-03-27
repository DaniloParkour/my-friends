import React from 'react';
import ReactDOM from 'react-dom'; //Integration of REACT with the DOM
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') //The App will injected on Element with id="root"
);

