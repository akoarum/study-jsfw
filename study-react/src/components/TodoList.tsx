import styled from 'styled-components'
import * as React from 'react'
import TodoItem from './TodoItem'

interface Todo {
  title: string,
  id: number,
  completed: boolean
}

interface Props {
  className?: string,
  todos: Array<Todo>,
  toggleTodo: (id: number) => void
}

const TodoList: React.SFC<Props> = ({ className, todos, toggleTodo }) => {
  const todoItems = todos.map(todo => (
    <TodoItem todo={todo.title} key={todo.id} completed={todo.completed} id={todo.id} toggleTodo={toggleTodo} />
  ))
  return (
    <ul className={className}>
      {todoItems}
    </ul>
  )
}

export default styled(TodoList)`
  margin: 0;
  padding: 0;
  list-style: none;
`