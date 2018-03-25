import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { taskModalActions, tasksActions } from '../actions'
import { taskModalSelectors } from '../selectors'

class TaskModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      deadline: '',
      assignee: '',
      description: '',
      isValid: true,
    }
  }

  componentWillReceiveProps(props) {
    if (props.task) {
      this.setState({
        name: props.task.task_title,
        deadline: props.task.deadline,
        assignee: props.task.assignee,
        description: props.task.task_description,
        isValid: true,
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      isValid: true,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.name && this.state.deadline && this.state.assignee) {
      if (this.props.task) {
        this.props.dispatchEditTask({
          task_id: this.props.taskId,
          task_title: this.state.name,
          task_description: this.state.description,
          assignee: this.state.assignee,
          deadline: this.state.deadline
        })
      } else {
        this.props.dispatchAddTask(this.state)
      }
      this.props.dispatchClose()
      this.setState({
        name: '',
        deadline: '',
        assignee: '',
        description: '',
        isValid: true,
      })
    } else {
      this.setState({
        isValid: false,
      })
    }
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
          <p className="modal__title">{this.props.task ? 'Edit' : 'Add New'} Task</p>
          <a onClick={this.props.dispatchClose}><i className="icon-cancel-circled-outline icon-btn"></i></a>
        </header>
        {!this.state.isValid && <p className="modal__error">
          All fields with <span className="big">*</span> are required!
        </p>}
        <div className="modal__body">
          <form onSubmit={this.handleSubmit} className="modal__form">
            <label htmlFor="name">Task Name <span className="big">*</span></label>
            <input className="modal__input"
              type="text"
              id="name"
              name="name"
              onChange={this.handleChange}
              value={this.state.name} />
            <label htmlFor="deadline">Deadline <span className="big">*</span></label>
            <input className="modal__input"
              type="date"
              id="deadline"
              name="deadline"
              onChange={this.handleChange}
              value={this.state.date} />
            <label htmlFor="assignee">Assignee's Name <span className="big">*</span></label>
            <input className="modal__input"
              type="text"
              id="assignee"
              name="assignee"
              onChange={this.handleChange}
              value={this.state.assignee} />
            <label htmlFor="description">Description</label>
            <textarea className="modal__textarea"
              id="description"
              name="description"
              onChange={this.handleChange}
              value={this.state.description} />
            <div className="modal__buttons">
              <button onClick={this.props.dispatchClose}>Cancel</button>
              <input type="submit" value={this.props.task ? 'Edit' : 'Add'} />
            </div>
          </form>
        </div>
      </Modal>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  isOpened: taskModalSelectors.isOpened(state),
  task: taskModalSelectors.getTask(state),
  taskId: taskModalSelectors.getTaskId(state),
})

const mapDispatchToProps = (dispatch) => ({
  dispatchClose: () => {
    dispatch(taskModalActions.close())
  },
  dispatchAddTask: (payload) => {
    dispatch(tasksActions.add(payload))
  },
  dispatchEditTask: (payload) => {
    dispatch(tasksActions.edit(payload))
  },
})

TaskModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskModal)

export default TaskModal