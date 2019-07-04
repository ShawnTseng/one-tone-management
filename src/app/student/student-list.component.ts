import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { StudentService } from './student.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  /** 學生清單來源 */
  $studentList;

  /** 顯示欄位 */
  displayedColumns: string[] = ['id', 'studentName', 'phone', 'parentName', 'course', 'annualFeeDate'];

  $studentListFromFireBase: Observable<any>;

  constructor(private studentService: StudentService, private db: AngularFirestore) {
    this.$studentListFromFireBase = this.db.collection('student').valueChanges();
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.$studentList = this.studentService.getStudentList();
  }
}
