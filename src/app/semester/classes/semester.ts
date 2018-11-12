import {StudyPlan} from '../../study-plan/classes/study-plan';

export class Semester {
  id: number;
  SemesterNumber: number;
  studyPlan: StudyPlan;


  constructor(id?: number, SemesterNumber?: number, studyPlan?: StudyPlan) {
    this.id = id;
    this.SemesterNumber = SemesterNumber;
    this.studyPlan = studyPlan ? studyPlan : new StudyPlan();
  }
}
