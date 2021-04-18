import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  public mytitle:string="Anu Gantasala";
 


public child:boolean=true;
childData:string;

onEventReceivedFromChild(data:string){
  this.child=true;
  this.childData=data;
}
setValue(){
  this.messageToPassToParent="Sannu";
}
}
