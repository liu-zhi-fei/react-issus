import React from 'react';
import ReactDOM from 'react-dom/client';
import Clock from './Click';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Clock >{(time) =>time}</Clock>
  </React.StrictMode>
);
