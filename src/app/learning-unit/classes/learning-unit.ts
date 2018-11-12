import {Semester} from '../../semester/classes/semester';

export class LearningUnit {
  id: number;
  name: string;
  TEPICCredits: number;
  SATCACredits: number;
  theoryHoursPerWeek: number;
  practiceHoursPerWeek: number;
  formationArea: string;
  semester: Semester;

  constructor(id?: number, name?: string, TEPICCredits?: number, SATCACredits?: number,
              theoryHoursPerWeek?: number, practiceHoursPerWeek?: number, formationArea?: string, semester?: Semester) {
    this.id = id;
    this.name = name;
    this.TEPICCredits = TEPICCredits;
    this.SATCACredits = SATCACredits;
    this.theoryHoursPerWeek = theoryHoursPerWeek;
    this.practiceHoursPerWeek = practiceHoursPerWeek;
    this.formationArea = formationArea;
    this.semester = semester ? semester : new Semester();
  }
}
