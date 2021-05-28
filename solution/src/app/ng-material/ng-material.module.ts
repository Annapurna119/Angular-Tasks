import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   
    MatDividerModule,
   
    MatListModule,
   
  ],
  exports: [
    CommonModule,   
    MatDividerModule,   
    MatListModule,
    
  ]
})
export class NgMaterialModule { }