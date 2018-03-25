import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { tasksActions, confirmationModalActions } from '../actions'
import { confirmationModalSelectors } from '../selectors'

class ConfirmationModal extends React.PureComponent {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatchDeleteTask(this.props.taskId)
    this.props.dispatchClose()
  }

  render() {
    if (!this.props.isOpened) {
      return null
    }
    return (
      <Modal className="modal"
        isOpen={this.props.isOpened}
        onRequestClose={this.props.dispatchClose}
        ariaHideApp={false}>
        <header className="modal__header">
          <p className="modal__title">Confirm Delete</p>
          <a onClick={this.props.dispatchClose}><i className="icon-cancel-circled-outline icon-btn"></i></a>
        </header>
        <div className="modal__body">
          <form onSubmit={this.handleSubmit} className="modal__form">
            <label htmlFor="name">Are you sure you want to delete this task?</label>
            <div className="modal__buttons">
              <button onClick={this.props.dispatchClose}>Cancel</button>
              <input type="submit" value="DELETE" />
            </div>
          </form>
        </div>
      </Modal>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  isOpened: confirmationModalSelectors.isOpened(state),
  taskId: confirmationModalSelectors.getTaskId(state),
})

const mapDispatchToProps = (dispatch) => ({
  dispatchClose: () => {
    dispatch(confirmationModalActions.close())
  },
  dispatchDeleteTask: (payload) => {
    dispatch(tasksActions.remove(payload))
  },
})

ConfirmationModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmationModal)

export default ConfirmationModal