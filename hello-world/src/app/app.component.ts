import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public myTitle:string = 'hello-world';
  name="Annapurna";
  date=new Date();
}
