import { combineReducers } from 'redux'
import tasks from './tasks'
import taskModal from './taskModal'
import confirmationModal from './confirmationModal'

const reducers = combineReducers({
  tasks,
  taskModal,
  confirmationModal,
})

export default reducers
