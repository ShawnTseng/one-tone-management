import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentList: Array<Student> = [];

  constructor(private http: HttpClient) { }

  /** 取得學生清單 */
  getStudentList() {
    const $student = this.http.get('/assets/student.json');
    $student.subscribe((data: Array<any>) => {
      this.studentList = data;
    });
    return $student;
  }

  /** 取得單筆學生 */
  getStudent(id: number) {
    return this.studentList.find(student => id === student.id);
  }
}
