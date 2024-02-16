import React from 'react'
import ReactDOM from 'react-dom/client';
// import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App.jsx'
import './index.css'
import { PersistGate } from 'redux-persist/integration/react'; 
import { persistStore } from 'redux-persist';

// const container = document.getElementById('root');
// const root = createRoot(container);
let persistor = persistStore(store);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
