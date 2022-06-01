import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import './index.css';
import App from './App';
import { theme } from './themes';
import reportWebVitals from './reportWebVitals';

render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
