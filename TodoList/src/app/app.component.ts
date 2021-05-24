import { Component } from '@angular/core';
import { Todo } from './todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  title = 'TodoList'; 
  editable:boolean=false;
  todos:Todo= []

  add(){    
    const TodosList ={
      title :this.title,
      editable:this.editable
    }
    this.todos.splice(0,0); 
  }
}
