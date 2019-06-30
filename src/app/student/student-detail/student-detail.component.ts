import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  /** 頁面狀態 */
  status;

  selectedStudent: Student;

  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit() {
    this.status = this.route.snapshot.paramMap.get('status');
    const check = this.route.snapshot.paramMap.has('id');
    if (check) {
      const id = +this.route.snapshot.paramMap.get('id');
      this.selectedStudent = this.studentService.getStudent(id);
    }
  }
}
