import {combineReducers} from 'redux';
import * as R from 'ramda';
import initialState from './initialState';
import * as C from './konstants';

function configJson(state = initialState, action) {
  switch (action && action.type) {

    default:
      return state;
  }
}


const rootReducer = combineReducers({
  configJson
});

export default rootReducer;
