import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import initialState from './initialState';
import {ThemeProvider} from 'react-jss'
import createAtomicTheme from './theme';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const myTheme = createAtomicTheme();
const store = configureStore(initialState);

render(
  <ThemeProvider theme={myTheme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
  , document.getElementById('root'));

