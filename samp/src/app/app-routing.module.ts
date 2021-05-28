import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookFilterComponent } from './book-filter/book-filter.component';

const routes: Routes = [ 
  { path: '',       component: BookFilterComponent},
  {path: '**', redirectTo:'PageNotFoundComponent'},
  ];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes) ],
  
  exports: [RouterModule]
})

//export const AppRoutingModule = RouterModule.forRoot(routes)
export class AppRoutingModule { }

