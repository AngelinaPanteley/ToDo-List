import { createSelector } from 'reselect'

const getState = (globalState) => globalState.tasks

export const getTasks = createSelector(
  getState, (state) => state
)