import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit{
  ngOnInit(): void {
    
  }
  ttitle:string;
  tdesc:string;
  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter();

  onSubmit(){
    const todo = {
      tno:1,
      ttitle: this.ttitle,
      tdesc: this.tdesc,
      tactive: true
    }
    this.todoAdd.emit(todo)
  }
}
