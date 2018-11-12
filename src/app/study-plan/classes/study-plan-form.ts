export class StudyPlanForm {
  id = '';
  academicProgram = '';
  year = '';
  mode = '';
  totalTEPICCredits = '';
  totalSATCACredits = '';
  totalTheoryHours = '';
  totalPracticeHours = '';


  constructor(academicProgram?: string, year?: string, mode?: string, totalTEPICCredits?: string,
              totalSATCACredits?: string, totalTheoryHours?: string, totalPracticeHours?: string) {
    this.academicProgram = academicProgram;
    this.year = year;
    this.mode = mode;
    this.totalTEPICCredits = totalTEPICCredits;
    this.totalSATCACredits = totalSATCACredits;
    this.totalTheoryHours = totalTheoryHours;
    this.totalPracticeHours = totalPracticeHours;
  }
}


