import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { FirebaseProvider } from './Providers/FirebaseProvider';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

