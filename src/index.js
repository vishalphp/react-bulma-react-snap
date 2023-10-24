import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 
import { BrowserRouter } from 'react-router-dom';
import { hydrate, render } from "react-dom";
import { SeoProvider } from './hooks/useSeo';

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SeoProvider>
        <App />
      </SeoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
*/

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<BrowserRouter><SeoProvider><App /></SeoProvider></BrowserRouter>, rootElement);
} else {
  render(  <BrowserRouter><SeoProvider><App /></SeoProvider></BrowserRouter>, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
