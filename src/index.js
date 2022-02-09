import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/fonts/Mulish/Mulish-Italic-VariableFont_wght.ttf';
import './assets/fonts/Mulish/Mulish-VariableFont_wght.ttf';
import Header from './Components/layout/Header';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="*" element={<main style={{ padding: "1rem" }}>
            <p>You just hit a route that doesn't exist... <span> 👀</span></p>
          </main>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);