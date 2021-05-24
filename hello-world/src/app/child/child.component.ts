import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('data') ChildData:string

  @Output() emitter:EventEmitter<string>=new EventEmitter<string>()
 

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(args:string){
    args+="  I am coming from child"
    this.emitter.emit(args)
  }
 

}
