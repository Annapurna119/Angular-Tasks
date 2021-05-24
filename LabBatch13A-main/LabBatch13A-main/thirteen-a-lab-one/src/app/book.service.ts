import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, map } from 'rxjs/operators';
import { Book } from './models/book';
import { Categories } from './models/categories';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseURL = '/api/book/';

  constructor(private http: HttpClient) { }

  categories$ = this.http.get<Categories[]>(this.baseURL + 'GetCategoriesList').pipe(shareReplay(1));

  books$ = this.getAllBooks().pipe(shareReplay(1));

  getAllBooks() {
    return this.http.get<Book[]>(this.baseURL);
  }
}
