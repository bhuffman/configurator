import { createSelector } from 'reselect';
import { pipe, values, reduce, isNil, append, isEmpty, curry, path, pick, flatten, head, fromPairs, map, find, propEq } from 'ramda';


const config = (state, props) => state.config;

export const getConfig = createSelector(
    version,
    (version) => {
        return version
    }
  )
