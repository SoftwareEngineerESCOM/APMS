import {AcademicProgram} from '../../academic-program/classes/academic-program';
import {StudyPlanMode} from '../../study-plan-mode/classes/study-plan-mode';

export class StudyPlan {
  id: number;
  year: number;
  totalTEPICCredits: number;
  totalSATCACredits: number;
  totalTheoryHours: number;
  totalPracticeHours: number;
  academicProgram: AcademicProgram;
  mode: StudyPlanMode;

  constructor(id?: number, year?: number, totalTEPICCredits?: number,
              totalSATCACredits?: number, totalTheoryHours?: number, totalPracticeHours?: number,
              academicProgram?: AcademicProgram, mode?: StudyPlanMode) {
    this.id = id;
    this.year = year;
    this.totalTEPICCredits = totalTEPICCredits;
    this.totalSATCACredits = totalSATCACredits;
    this.totalTheoryHours = totalTheoryHours;
    this.totalPracticeHours = totalPracticeHours;
    this.academicProgram = academicProgram ? academicProgram : new AcademicProgram();
    this.mode = mode ? mode : new StudyPlanMode();
  }
}
