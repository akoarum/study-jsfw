import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Output() toggleTodo: EventEmitter<{ id: number }> = new EventEmitter<{ id: number }>()
  @Input() todos

  constructor() { }

  ngOnInit() {
  }

  _toggleTodo({ id }) {
    this.toggleTodo.emit({ id })
  }
}
