import React, { Component } from 'react'
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'

interface Todo {
  title: string,
  id: number,
  completed: boolean
}

interface State {
  todos: Todo[],
  value: string
}

class App extends Component {
  public state: State = {
    todos: [],
    value: ''
  }

  toggleTodo(id: number) {
    const todos = this.state.todos.concat()
    const targetTodo = todos.find(todo => todo.id === id)
    if (targetTodo) {
      targetTodo.completed = !targetTodo.completed
    }
    this.setState({
      todos: todos
    })
  }

  addTodo() {
    this.setState({
      todos: this.state.todos.concat([{
        title: this.state.value,
        id: this.state.todos.length + 1,
        completed: false
      }])
    })
    this.clearValue()
  }

  clearValue() {
    this.setState({
      value: ''
    })
  }

  updateValue(e: any) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <AddTodoForm
          value={this.state.value}
          addTodo={this.addTodo.bind(this)}
          updateValue={this.updateValue.bind(this)}
        />
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo.bind(this)}
        />
      </div>
    )
  }
}

export default App