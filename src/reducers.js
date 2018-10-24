import {combineReducers} from 'redux';
import {assocPath, intersperse, append, prepend, init, path, merge, dissocPath, isNil, last, isEmpty, tail, head} from 'ramda';
import initialState from './initialState';
import * as C from './konstants';
import SubModule from './components/dnd/SubModule';

function configJson(state = initialState, action) {
  switch (action && action.type) {
    case C.ADD_TREE_NODE_TO_STATE:
      return (() => {
        const newPath = append('children', prepend(head(action.path), intersperse('children', tail(action.path))))
        const newNode = {[action.parentkey]: {injectProps: action.customProps, type: action.value, sort: state.globalId}}

        return assocPath(newPath, merge(newNode, path(newPath,state)), {...state, globalId: state.globalId + 1});
      })()

    case C.REPLACE_TREE_NODE_TO_STATE:
      return (() => {
        const newPath = prepend(head(action.path), intersperse('children', tail(action.path)))
        const newNode = {injectProps: action.customProps,type: action.value}

        return assocPath(newPath, newNode, {...state});
      })()

    case C.REPLACE_SUBMODULE_TO_STATE:
      return (() => {
        const newPath = prepend(head(action.path), intersperse('children', tail(action.path)))
        const newNode = action.value

        return assocPath(newPath, newNode, {...state});
      })()

    case C.ADD_SUBMODULE_TO_STATE:
      return (() => {
        const newPath = append('children', prepend(head(action.path), intersperse('children', tail(action.path))))
        const newNode = {[action.parentkey]: {...action.value, sort: state.globalId}}

        console.log(newPath, newNode)

        return assocPath(newPath, merge(newNode, path(newPath,state)), {...state, globalId: state.globalId + 1});
      })()

    case C.DELETE_TREE_NODE_TO_STATE:
      return (() => {
        const newPath = prepend(head(action.path), intersperse('children', tail(action.path)))

        return dissocPath(newPath, state);
      })()


    case C.MAKE_SUBMODULE_TO_STATE:
      return (() => {
        const name = action.comp + '-' + state.subModuleId;
        const newPath = prepend(head(action.path), intersperse('children', tail(action.path)))
        
        return assocPath(['subModules', name], {...path(newPath, state), name: name}, {...state, subModuleId: state.subModuleId + 1});
      })()

    case C.APPEND_HISTORY:
      return {...state, history: append(action.history, state.history)};

    case C.REWIND_HISTORY:
      return {...state, history: init(state.history), tree: isEmpty(state.history) ? state.tree : last(state.history)};

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
