import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StudentListComponent } from './student-list.component';
import { StudentRoutingModule } from './student-routing.module';

@NgModule({
  declarations: [StudentListComponent],
  imports: [
    CommonModule, HttpClientModule, StudentRoutingModule
  ]
})
export class StudentModule { }
