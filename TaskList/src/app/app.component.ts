import { Component, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'TaskList';  
  taskList =[];
 
   
  
  onEnter(abc:any)
  {
    this.taskList.push(abc.value)
    abc.value = ''    
  }

 onDelete(i){
    this.taskList.splice(i,1)
    }
 
    username:String="";
   
  }



  //enableButton(i){
   
   // if(event.target.checked){
    //  (document.getElementById('del') as HTMLInputElement).disabled = false;
   //   this.toggleButton = false;
   // }
    //else{
      //this.toggleButton = true;
    //}
  //} 

 

