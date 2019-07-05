import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CourseComponent } from './course.component';
import { CourseRoutingModule } from './course-routing.module';

@NgModule({
  declarations: [CourseComponent],
  imports: [
    CommonModule, CourseRoutingModule, FullCalendarModule
  ]
})
export class CourseModule { }
