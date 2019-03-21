import { Component } from '@angular/core'
import { Todo } from './Todo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [
    { todo: 'タイトル', id: 1, completed: false }
  ]
  value: string = ''

  addTodo({ todo }) {
    this.todos = this.todos.concat([{
      todo,
      id: this.todos[this.todos.length - 1].id + 1,
      completed: false
    }])
  }

  toggleTodo({ id }) {
    const todos = this.todos.concat()
    const targetTodo = todos.find(todo => todo.id === id)
    targetTodo.completed = !targetTodo.completed
    this.todos = todos
  }
}
