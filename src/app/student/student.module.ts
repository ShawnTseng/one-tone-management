import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { StudentListComponent } from './student-list.component';
import { StudentRoutingModule } from './student-routing.module';

@NgModule({
  declarations: [StudentListComponent],
  imports: [
    CommonModule, HttpClientModule, StudentRoutingModule, MatButtonModule, MatCardModule, MatTableModule
  ]
})
export class StudentModule { }
