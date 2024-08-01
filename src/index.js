import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styels/index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <GoogleOAuthProvider clientId='40930930246-6aga7k1nfqmc7ij19k6r2tdie28jv66r.apps.googleusercontent.com'>
      <App />
  </GoogleOAuthProvider>
  </React.StrictMode>
);
