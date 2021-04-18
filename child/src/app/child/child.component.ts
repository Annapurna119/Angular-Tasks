import { Component,EventEmitter, Input, OnChanges, OnInit, Output,SimpleChanges, TemplateRef } 
from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {
  childData: any;


  @Input('message') message:string;

  

  @Input() customTemplate:TemplateRef<HTMLElement>

  constructor() { }

  ngOnInit(): void {
  }


  ngOnChanges(changes:SimpleChanges):void{
   console.log(this.childData)
   for(let property in changes){
     if(property==='childData'){
       console.log('previous:',changes[property].previousValue);
       console.log('current:',changes[property].currentValue);
       console.log('firstChange:',changes[property].firstChange);
     }
   }

  }

@Output()
notify:EventEmitter<string>=new EventEmitter<string>();
passData(){
  this.notify.emit("This is coming from child");
}


}
