import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher.component';

@NgModule({
  declarations: [TeacherComponent],
  imports: [
    CommonModule
  ],
  exports: [TeacherComponent]
})
export class TeacherModule { }
