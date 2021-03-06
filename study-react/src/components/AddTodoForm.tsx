import styled from 'styled-components'
import * as React from 'react'

interface Props {
  className?: string,
  addTodo: () => void,
  updateValue: (e: any) => void,
  value: string
}

const AddTodoForm: React.SFC<Props> = ({ className, addTodo, updateValue, value }) => {
  return (
    <div className={className}>
      <input type="text" value={ value } onChange={updateValue} className="input"  />
      <button type="button" onClick={() => addTodo()} className="btn">追加</button>
    </div>
  )
}

export default styled(AddTodoForm)`
  padding: 16px 18px 18px;
  background: #f9f9f9;

  .input {
    border-radius: 2px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    padding: 8px 10px 7px;
    width: 100%;
    font-size: 15px;
    outline: none;
    transition: border 0.5s ease;

    &:focus {
      border-color: #006ee8;
    }
  }
  .btn {
    margin-top: 12px;
    border-radius: 3px;
    border: none;
    padding: 6px 16px;
    background: #006ee8;
    font-size: 14px;
    line-height: 1;
    color: #fff;
    cursor: pointer;
    transition: background 0.5s ease;

    &:hover {
      background: #1063bf;
    }
  }
`