import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { DataContextData } from './hooks/dataContext';
import './styles/global.scss'

ReactDOM.render(
  <React.StrictMode>
    <DataContextData>
      <App />
    </DataContextData>
  </React.StrictMode>,
  document.getElementById('root')
);

