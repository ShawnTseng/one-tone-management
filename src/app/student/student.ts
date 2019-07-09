export class Student {
  /** 編號; TODO:確認作法 */
  id = 0;

  /** 學生姓名 */
  studentName = '';

  /** 聯絡電話 */
  phone = '';

  /** 家長姓名 */
  parentName = '';

  /** 擁有堂數 */
  ownedCourse = 16;

  /** 已用堂數 */
  usedCourse = 0;

  /** 未用堂數 */
  unusedCourse = 16;

  /** 最後一次繳交年費的日期 */
  annualFeeDate: Date = new Date();
}
