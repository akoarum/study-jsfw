import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core'
import { Todo } from '../Todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo
  @Output() updateTodo: EventEmitter<{ id: number }> = new EventEmitter<{ id: number }>()

  constructor() { }

  ngOnInit() {
  }

  onClick(todo: Todo) {
    this.updateTodo.emit({ id: todo.id })
  }

}
