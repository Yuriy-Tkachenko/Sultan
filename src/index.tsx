import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app';
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./thems/default";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </>
);