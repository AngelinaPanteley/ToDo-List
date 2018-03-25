export const open = (payload) => ({
    type: 'OPEN_TASK_MODAL',
    payload
})

export const close = () => ({
    type: 'CLOSE_TASK_MODAL',
})