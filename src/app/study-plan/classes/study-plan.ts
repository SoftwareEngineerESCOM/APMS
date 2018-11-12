import {AcademicProgram} from '../../academic-program/classes/academic-program';

export class StudyPlan {
  id: number;
  year: number;
  mode: string;
  totalTEPICCredits: number;
  totalSATCACredits: number;
  totalTheoryHours: number;
  totalPracticeHours: number;
  academicProgram: AcademicProgram;

  constructor(id?: number, year?: number, mode?: string, totalTEPICCredits?: number,
              totalSATCACredits?: number, totalTheoryHours?: number, totalPracticeHours?: number,
              academicProgram?: AcademicProgram) {
    this.id = id;
    this.year = year;
    this.mode = mode;
    this.totalTEPICCredits = totalTEPICCredits;
    this.totalSATCACredits = totalSATCACredits;
    this.totalTheoryHours = totalTheoryHours;
    this.totalPracticeHours = totalPracticeHours;
    this.academicProgram = academicProgram ? academicProgram : new AcademicProgram();
  }
}
