import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { PageStatus } from 'src/app/core/page-status.enum';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  /** 頁面狀態 */
  status: PageStatus;

  selectedStudent: Student;

  constructor(private route: ActivatedRoute, private studentService: StudentService) {
    this.selectedStudent = new Student();
  }

  ngOnInit() {
    this.status = PageStatus[this.route.snapshot.paramMap.get('status')];
    const check = this.route.snapshot.paramMap.has('id');
    if (check) {
      const id = +this.route.snapshot.paramMap.get('id');
      this.selectedStudent = this.studentService.getStudentById(id);
    }
  }

  /** 新增/更新/儲存 */
  save() {

  }
}
