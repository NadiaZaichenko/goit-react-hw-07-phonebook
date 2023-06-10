import React from 'react';
import { ThemeProvider } from '@emotion/react';
import ReactDOM from 'react-dom/client';
import {App}  from 'components/App';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import { persistor, store } from 'reducer/store';
import './index.css';

const theme = {
  colors: {
    backgroundColor: '#83dc577a',
    sectionBackgroundColor: '#f0f0f0',
    buttonBackgroundColor: '#29ff189c',
  },
  containerBorderRadius: '20px',
  inputBorderRadius: '8px',
  buttonBorderRadius: '5px',
  buttonBorder: '1px solid #bb9665',
  boxShadow: '3px 5px 10px 3px rgba(0, 0, 0, 0.30)',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store ={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>   
           <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);