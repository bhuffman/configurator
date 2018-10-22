import {put, all, call, takeEvery, select} from 'redux-saga/effects';
import {compose} from 'ramda';
import * as C from 'konstants';

function *addNode(action) {
  const oldTree = yield select((state) => state.configJson.tree);

  yield put({...action, type: C.ADD_TREE_NODE_TO_STATE});
  yield put({history: oldTree, type: C.APPEND_HISTORY});
}

export function *watchAddNode() {
  yield takeEvery(C.ADD_TREE_NODE, addNode);
}

function *replaceNode(action) {
  const oldTree = yield select((state) => state.configJson.tree);

  yield put({...action, type: C.REPLACE_TREE_NODE_TO_STATE});
  yield put({history: oldTree, type: C.APPEND_HISTORY});
}

export function *watchReplaceNode() {
  yield takeEvery(C.REPLACE_TREE_NODE, replaceNode);
}

function *deleteNode(action) {
  const oldTree = yield select((state) => state.configJson.tree);

  yield put({...action, type: C.DELETE_TREE_NODE_TO_STATE});
  yield put({history: oldTree, type: C.APPEND_HISTORY});
}

export function *watchDeleteNode() {
  yield takeEvery(C.DELETE_TREE_NODE, deleteNode);
}

