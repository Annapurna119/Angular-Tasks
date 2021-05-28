import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../Services/book.service';
import { EMPTY, Observable } from 'rxjs';
import { Categories } from '../categories';
import { Book } from '../book';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-book-filter',
  templateUrl: './book-filter.component.html',
  styleUrls: ['./book-filter.component.css']
})
export class BookFilterComponent implements OnInit {

  @Input()
  category: String = '';

  categories$: Observable<Categories[]> | undefined;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.fetchCategories();
    console.log("landing page");
    
  }

  fetchCategories() {
    this.categories$ = this.bookService.categories$
      .pipe(
        catchError(err => {
          console.log('Error ocurred  ', err);
          return EMPTY;
        }));
  }

}
