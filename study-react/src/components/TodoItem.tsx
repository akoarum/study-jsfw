import styled from 'styled-components'
import * as React from 'react'

interface Props {
  className?: string,
  todo: string,
  id: number,
  completed: boolean,
  toggleTodo: (id: number) => void
}

const TodoItem: React.SFC<Props> = ({ className, todo, id, completed, toggleTodo }) => (
  <li className={className}>
    <div className="id">ID: {id}</div>
    <div className="todo">{todo}</div>
    <button type="button" onClick={() => toggleTodo(id)} className="btn">更新</button>
    {(() => completed ?
      <i className="completed">完了</i> :
      '')()}
  </li>
)

export default styled(TodoItem)`
  position: relative;
  padding: 12px 12px 13px;
  list-style-type: none;

  + li {
    border-top: 1px solid #ccc;
  }

  .id {
    font-size: 13px;
    color: #949494;
  }
  .todo {
    margin-bottom: 8px;
  }
  .completed {
    position: absolute;
    right: 0;
    top: 13px;
    border-radius: 2px;
    padding: 4px 6px 5px;
    line-height: 1;
    background: #f0f0f0;
    font-style: normal;
    font-size: 12px;
  }
  .btn {
    border-radius: 2px;
    border: none;
    padding: 4px 8px;
    border: 1px solid #006ee8;
    font-size: 12px;
    line-height: 1;
    color: #006ee8;
    cursor: pointer;
    transition: background 0.5s ease;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`