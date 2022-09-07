import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const regl = require('regl')()

ReactDOM.render(
  <React.StrictMode>
    <App color="[0, 1, 0, 0.5]" />
  </React.StrictMode>,
  document.getElementById('root')
);
