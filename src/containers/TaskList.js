import React from 'react'
import { connect } from 'react-redux'
import { taskModalActions, confirmationModalActions } from '../actions'
import { tasksSelectors } from '../selectors'
import Task from '../components/Task'

class TaskList extends React.PureComponent {
  render() {
    return (
      <div className="task-list-container">
        <ul className="task-list">
          {!this.props.tasks.size &&
            <p className="task-list__subtitle">Your task list is empty. Click orange button to add some.</p>
          }
          {this.props.tasks.map(
            (task) => <Task task={task} key={task.task_id}
              onEdit={this.props.dispatchOpenEditTaskModal}
              onDelete={this.props.dispatchOpenConfirmationModal} />
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  tasks: tasksSelectors.getTasks(state),
})

const mapDispatchToProps = (dispatch) => ({
  dispatchOpenEditTaskModal: (payload) => {
    dispatch(taskModalActions.open(payload))
  },
  dispatchOpenConfirmationModal: (payload) => {
    dispatch(confirmationModalActions.open(payload))
  },
})

TaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)

export default TaskList