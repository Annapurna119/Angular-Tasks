import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}
