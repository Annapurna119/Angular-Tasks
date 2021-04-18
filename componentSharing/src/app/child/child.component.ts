import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() eventObj:EventEmitter<string> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  sendData(item)
  {
     let  textdata = item.target.value
    this.eventObj.emit(textdata)
  }
  
}
