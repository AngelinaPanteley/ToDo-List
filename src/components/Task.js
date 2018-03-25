import React from 'react'

class Task extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isDescriptionOpen: false
    }
  }

  handleOpenDescrition = (e) => {
    const flag = this.state.isDescriptionOpen
    this.setState({
      isDescriptionOpen: !flag
    })
  }

  handleEdit = (e) => {
    this.props.onEdit(this.props.task.task_id)
  }

  handleDelete = (e) => {
    this.props.onDelete(this.props.task.task_id)
  }

  render() {
    return (
      <li className="task">
        <div className="task__flex">
          <a className="task__icon" onClick={this.handleOpenDescrition}>
            <i className={this.state.isDescriptionOpen ? 'icon-down-open' : 'icon-right-open'}></i>
          </a>
          <span className="task__id">№{this.props.task.task_id}</span>
          <span className="task__title">{this.props.task.task_title}</span>
          <span className="task__assignee">{this.props.task.assignee}</span>
          <span className="task__deadline">{this.props.task.deadline}</span>
          <a className="task__icon" onClick={this.handleEdit}>
            <i className="icon-edit-alt"></i>
          </a>
          <a className="task__icon" onClick={this.handleDelete}>
            <i className="icon-trash"></i>
          </a>
        </div>
        {this.state.isDescriptionOpen && this.props.task.task_description &&
          <p className="task__description">{this.props.task.task_description}</p>
        }
      </li>
    )
  }
}

export default Task