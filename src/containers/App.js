import React, { Component } from 'react'
import TaskModal from './TaskModal'
import ConfirmationModal from './ConfirmationModal'
import AddTaskButton from './AddTaskButton'
import TaskList from './TaskList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <AddTaskButton />
        <TaskList />
        <TaskModal />
        <ConfirmationModal />
      </div>
    )
  }
}

export default App
