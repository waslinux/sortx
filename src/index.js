import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context/AppContext';
import { LotoFacilProvider } from './context/ContextLotoFacil';
import { MegaSenaProvider } from './context/ContextMegaSena';
import { LotoManiaProvider } from './context/ContextLotoMania';

import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LotoFacilProvider>
      <MegaSenaProvider>
        <LotoManiaProvider>
          <AppProvider>
            <App />
          </AppProvider>
        </LotoManiaProvider>
      </MegaSenaProvider>
    </LotoFacilProvider>

  </React.StrictMode>
);
