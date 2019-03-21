import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.scss']
})
export class AddTodoFormComponent implements OnInit {
  @Output() addTodo: EventEmitter<{ todo: string }> = new EventEmitter<{ todo: string }>()

  value: string = ''

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.addTodo.emit({ todo: this.value })
    this.value = ''
  }

}
