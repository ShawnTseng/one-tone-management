import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentList: Array<Student> = [];

  // $studentListFromFireBase: Observable<any>;

  constructor(private http: HttpClient, private db: AngularFirestore) { }

  /** 取得學生清單 */
  getStudentList() {
    const $student = this.http.get('/assets/student.json');
    $student.subscribe((data: Array<any>) => {
      this.studentList = data;
    });

    // this.$studentListFromFireBase = this.db.collection('student').valueChanges();
    return $student;
  }

  /** 取得單筆學生 */
  getStudentById(id: number) {
    return this.studentList.find(student => id === student.id);
  }
}
