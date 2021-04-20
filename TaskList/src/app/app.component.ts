import { Component} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskList';  
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
      (document.getElementById('edi') as HTMLInputElement).disabled = false;
      (document.getElementById('del') as HTMLInputElement).disabled = false;
    }
    else{
      (document.getElementById('edi') as HTMLInputElement).disabled = true;
      (document.getElementById('del') as HTMLInputElement).disabled = true;
    }
  }
}
