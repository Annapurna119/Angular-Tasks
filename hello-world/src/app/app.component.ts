import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myName:string="Anu"
  child:boolean=false;
  ChildData: string;

  onEvent(data:string)
  {
 this.child=true;
 this.ChildData=data;

  }
}
