import { createSelector } from 'reselect';

// const config = (state) => state.config;

export const getConfig = createSelector(
    version,
    (version) => {
        return version
    }
  )
