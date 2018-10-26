import * as A from 'globalActions';
import { path, contains } from 'ramda';
import * as C from 'konstants';

export default function undoRedo({ getState, dispatch }) {
	return next => action => {
		if (
			contains(action.type, [
				C.ADD_TREE_NODE,
				C.REPLACE_TREE_NODE,
				C.DELETE_TREE_NODE,
				C.MAKE_SUBMODULE,
				C.REPLACE_SUBMODULE,
				C.ADD_SUBMODULE,
			])
		) {
			const nextTree = path(['configJson', 'tree'], getState());
			dispatch(A.default.appendHistory({ history: nextTree }));
		}
		return next(action);
	};
}
