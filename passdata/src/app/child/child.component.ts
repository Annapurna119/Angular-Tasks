import { EventEmitter } from '@angular/core';
import { Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges,OnDestroy {
  @Input('Data') ChildData:string | undefined
  unSaved:boolean=true;
  messageToPassToParent:string="Anudeep";


  @Output('emitter') emitter1=new EventEmitter()

  constructor() { 
    console.log('from constructor',this.ChildData);
  }

  ngOnInit(): void {

    console.log('from onInit',this.ChildData);
  }
  ngOnChanges(changes: SimpleChanges): void {
  
    console.log('from onchanges',this.ChildData)
    for(let property in changes){
      if(property==='childData'){
        console.log('previous',changes[property].previousValue);
        console.log('current',changes[property].currentValue);
        console.log('firstChange',changes[property].firstChange);
      }
    }





  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  

}
