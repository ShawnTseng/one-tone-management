import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
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

  constructor(private studentService: StudentService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  selectRow(rowData) {
    console.log('rowData:', rowData);
  }

  openAddPage() {
    // const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    //   width: '250px',
    //   // data: { name: this.name, animal: this.animal }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

  private loadData() {
    this.$studentList = this.studentService.getStudentList();
  }
}
