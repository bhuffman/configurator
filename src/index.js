import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import initialState from './initialState';
import {ThemeProvider} from 'react-jss'
import { BrowserRouter } from 'react-router-dom';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import App from './App';
import './index.css';

const store = configureStore(initialState);

render(
  <Provider store={store}>
    <DragDropContextProvider backend={HTML5Backend}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DragDropContextProvider>
  </Provider>
  , document.getElementById('root'));

export {store}