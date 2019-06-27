import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'student', loadChildren: () => import('./student/student.module').then(mod => mod.StudentModule) },
  { path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(mod => mod.TeacherModule) },
  { path: 'course', loadChildren: () => import('./course/course.module').then(mod => mod.CourseModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
