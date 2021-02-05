import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "styled-components";

const theme={
    colors: {
        blue: '#1338BE'
    },
    spacing: [0, 8, 16, 24, 32],
    fonts: [12,14].map(item=> item + 'px')
}

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
            <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
