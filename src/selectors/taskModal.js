import { createSelector } from 'reselect'
import * as tasks from './tasks'

const getState = (globalState) => globalState.taskModal

export const isOpened = createSelector(
  getState, (state) => state.isOpened
)

export const getTask = createSelector(
  getState, tasks.getTasks,
  (state, tasks) => tasks.find((task) => task.task_id === state.task_id)
)

export const getTaskId = createSelector(
  getState, (state) => state.task_id
)
