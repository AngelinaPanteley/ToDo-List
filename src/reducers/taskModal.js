const initialState = {
  isOpened: false,
  task_id: null,
}

const taskModal = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_TASK_MODAL': {
      return { 
        isOpened: true,
        task_id: action.payload,
      }
    }
    case 'CLOSE_TASK_MODAL': {
      return initialState
    }
  
    default: {
      return state
    }
  }
}

export default taskModal