let nextTaskId = 1

export const add = payload => ({
    type: 'ADD_TASK',
    payload: {
        id: nextTaskId++,
        ...payload
    }
})

export const edit = payload => ({
    type: 'EDIT_TASK',
    payload
})

export const remove = payload => ({
    type: 'REMOVE_TASK',
    payload
})