export interface Student {
  /** 編號 */
  id: number;

  /** 學生姓名 */
  studentName: string;

  /** 聯絡電話 */
  phone: string;

  /** 家長姓名 */
  parentName: string;

  /** 擁有堂數 */
  ownedCourse: number;

  /** 已用堂數 */
  usedCourse: number;

  /** 未用堂數 */
  unusedCourse: number;

  /** 最後一次繳交年費的日期 */
  annualFeeDate: Date;
}
