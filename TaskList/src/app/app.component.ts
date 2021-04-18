import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskList';
  check:boolean = true
  test = ""
  
  taskList = [];
  onEnter(abc)
  {
    this.taskList.push(abc.value)
    abc.value = ''
    
  }
  enableButton(check)
  {
    if(check.checked)
    {
      this.test = "button enabled";
    }
    else{
    this.test = "button disabled";
    }
  }
}
