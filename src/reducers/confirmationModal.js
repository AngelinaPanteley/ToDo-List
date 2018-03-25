const initialState = {
  isOpened: false,
  task_id: null,
}

const confirmationModal = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_CONFIRMATION_MODAL': {
      return {
        isOpened: true,
        task_id: action.payload,
      }
    }

    case 'CLOSE_CONFIRMATION_MODAL': {
      return initialState
    }

    default: {
      return state
    }
  }
}

export default confirmationModal