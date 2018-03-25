import Immutable from 'immutable'

const tasks = (state = new Immutable.List(), action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      return state.push({
        task_id: action.payload.id,
        task_title: action.payload.name,
        task_description: action.payload.description,
        deadline: action.payload.deadline,
        assignee: action.payload.assignee,
      })
    }
    case 'EDIT_TASK': {
      const index = state.findIndex((task) => task.task_id === action.payload.task_id)
      return state.set(index, action.payload)
    }
    case 'REMOVE_TASK': {
      const delIndex = state.findIndex((task) => {
        return task.task_id === action.payload
      })
      return state.delete(delIndex)
    }
    default: {
      return state
    }
  }
};

export default tasks;
