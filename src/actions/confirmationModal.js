export const open = (payload) => ({
  type: 'OPEN_CONFIRMATION_MODAL',
  payload
})

export const close = () => ({
  type: 'CLOSE_CONFIRMATION_MODAL',
})