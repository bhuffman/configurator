import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import * as sagas from '../sagas/sagas';
import createSagaMiddleware from 'redux-saga';
import {forEachObjIndexed} from 'ramda';
import undoMiddleware from 'undoMiddleware';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState){
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const myStore = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(undoMiddleware),
  ));
  forEachObjIndexed((saga) => {sagaMiddleware.run(saga);}, sagas);
  return myStore;
}
