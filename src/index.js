import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './Context';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router'

ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);
