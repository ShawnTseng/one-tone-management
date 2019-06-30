import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { StudentRoutingModule } from './student-routing.module';
import { StudentListComponent } from './student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

@NgModule({
  declarations: [StudentListComponent, StudentDetailComponent],
  imports: [
    CommonModule, HttpClientModule, StudentRoutingModule,
    MatButtonModule, MatIconModule, MatCardModule, MatTableModule
  ]
})
export class StudentModule { }
