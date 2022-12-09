import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GoogleCI}>
        {/* <React.StrictMode> */}
        <App />
        {/* </React.StrictMode> */}
      </GoogleOAuthProvider>
    </BrowserRouter>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
