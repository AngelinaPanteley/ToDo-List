import { createSelector } from 'reselect'

const getState = (globalState) => globalState.confirmationModal

export const isOpened = createSelector(
  getState, (state) => state.isOpened
)

export const getTaskId = createSelector(
  getState, (state) => state.task_id
)
