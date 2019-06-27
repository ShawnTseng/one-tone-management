import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) { }

  /** 取得學生清單 */
  getStudentList() {
    return this.http.get('/assets/student.json');
  }
}
