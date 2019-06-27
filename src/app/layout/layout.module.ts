import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StudentModule } from '../student/student.module';
import { TeacherModule } from '../teacher/teacher.module';

@NgModule({
  declarations: [TopBarComponent],
  imports: [
    CommonModule, RouterModule,
    MatIconModule, MatButtonModule, MatToolbarModule,
    StudentModule, TeacherModule
  ],
  exports: [
    TopBarComponent
  ]
})
export class LayoutModule { }
