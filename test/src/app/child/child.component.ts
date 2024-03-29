import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('data') childData:string

unSaved:boolean=true;
messageToPassToParent:string="Sandeep"
  @Output() 
  notify:EventEmitter<string>=new EventEmitter<string>()
  

  constructor() { }

  ngOnInit(): void {
  }

}
