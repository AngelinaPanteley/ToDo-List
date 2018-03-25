import React from 'react'
import { connect } from 'react-redux'
import { taskModalActions } from '../actions'

const AddTaskButton = ({ dispatch }) => {
  return (
    <button className="add-btn" type="submit" onClick={() => dispatch(taskModalActions.open('Add'))}>
      <i className="icon-plus"></i>
    </button>
  )
}

export default connect()(AddTaskButton)