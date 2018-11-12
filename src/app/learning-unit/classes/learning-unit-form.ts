export class LearningUnitForm {
  id = '';
  name = '';
  TEPICCredits = '';
  SATCACredits = '';
  theoryHoursPerWeek = '';
  practiceHoursPerWeek = '';
  formationArea = '';
  semester = '';


  constructor(id?: string, name?: string, TEPICCredits?: string, SATCACredits?: string, theoryHoursPerWeek?: string,
              practiceHoursPerWeek?: string, formationArea?: string, semester?: string) {
    this.id = id;
    this.name = name;
    this.TEPICCredits = TEPICCredits;
    this.SATCACredits = SATCACredits;
    this.theoryHoursPerWeek = theoryHoursPerWeek;
    this.practiceHoursPerWeek = practiceHoursPerWeek;
    this.formationArea = formationArea;
    this.semester = semester;
  }
}
