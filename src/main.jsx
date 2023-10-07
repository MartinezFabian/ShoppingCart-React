import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import './index.css';
import { FiltersProvider } from './products/context/FiltersContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FiltersProvider>
      <App></App>
    </FiltersProvider>
  </React.StrictMode>
);
