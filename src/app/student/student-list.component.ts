import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

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

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.loadData();
  }

  selectRow(rowData) {
    console.log('rowData:', rowData);
  }

  add() {

  }

  private loadData() {
    this.$studentList = this.studentService.getStudentList();
  }
}
