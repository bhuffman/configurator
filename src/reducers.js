import { combineReducers } from 'redux';
import {
	append,
	assocPath,
	dissocPath,
	head,
	intersperse,
	isEmpty,
	length,
	merge,
	nth,
	path,
	pipe,
	prepend,
	slice,
	tail,
} from 'ramda';
import initialState from './initialState';
import * as C from './konstants';

function configJson(state = initialState, action) {
  switch (action && action.type) {
    case C.ADD_TREE_NODE:
      return (() => {
        const newPath = pipe(
          tail,
          intersperse('children'),
          prepend(head(action.path)),
          append('children'),
        )(action.path)

        const newNode = {[action.parentkey]: {injectProps: action.customProps, type: action.value, sort: state.globalId}}

        return assocPath(newPath, merge(newNode, path(newPath,state)), {...state, globalId: state.globalId + 1});
      })()

    case C.REPLACE_TREE_NODE:
      return (() => {
        const newPath = pipe(
          tail,
          intersperse('children'),
          prepend(head(action.path)),
        )(action.path)

        const newNode = {injectProps: action.customProps,type: action.value}

        return assocPath(newPath, newNode, {...state});
      })()

    case C.REPLACE_SUBMODULE:
      return (() => {
        const newPath = pipe(
          tail,
          intersperse('children'),
          prepend(head(action.path)),
        )(action.path)
        const newNode = action.value

        return assocPath(newPath, newNode, {...state});
      })()

    case C.ADD_SUBMODULE:
      return (() => {
        const newPath = pipe(
          tail,
          intersperse('children'),
          prepend(head(action.path)),
          append('children')
        )(action.path)

        const newNode = {[action.parentkey]: {...action.value, sort: state.globalId}}

        return assocPath(newPath, merge(newNode, path(newPath,state)), {...state, globalId: state.globalId + 1});
      })()

    case C.DELETE_TREE_NODE:
      return (() => {
        const newPath = pipe(
          tail,
          intersperse('children'),
          prepend(head(action.path)),
        )(action.path)

        return dissocPath(newPath, state);
      })()


    case C.MAKE_SUBMODULE:
      return (() => {
        const name = action.comp + '-' + state.subModuleId;
        const newPath = pipe(
          tail,
          intersperse('children'),
          prepend(head(action.path)),
        )(action.path)
        
        return assocPath(['subModules', name], {...path(newPath, state), name: name}, {...state, subModuleId: state.subModuleId + 1});
      })()

    case C.APPEND_HISTORY:
      if(state.undoIndex < -1){
        return {...state, history: append(action.history, slice(0, state.undoIndex + 1, state.history)), undoIndex: 0};
      }else{
        return {...state, history: append(action.history, state.history), undoIndex: 0};
      }

    case C.REWIND_HISTORY:
      return (() => {
        const newIndex = Math.abs(state.undoIndex) >= length(state.history) ? length(state.history) * -1 : state.undoIndex - 1;

        return {...state, undoIndex: newIndex,
          tree: isEmpty(state.history) 
            ? state.tree 
            : nth(newIndex, state.history)};
      })()

    case C.FORWARD_HISTORY:
      return (() => {
        const newIndex = state.undoIndex + 1 >= 0 ? -1 : state.undoIndex + 1;
        
        return {...state, undoIndex: newIndex,
          tree: isEmpty(state.history) 
            ? state.tree 
            : nth(newIndex, state.history)};
      })()

    default:
      return state;
  }
}

function editor(state = initialState, action) {
  switch (action && action.type) {
    case C.SET_EDITOR_PATH:
      return assocPath(action.path, action.value, state);
      
    case C.TOGGLE_PREVIEW:
      return {...state, preview: !state.preview};
      
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  configJson,
  editor
});

export default rootReducer;
