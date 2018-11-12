import { StudyPlanModule } from './study-plan.module';

describe('StudyPlanModule', () => {
  let studyPlanModule: StudyPlanModule;

  beforeEach(() => {
    studyPlanModule = new StudyPlanModule();
  });

  it('should create an instance', () => {
    expect(studyPlanModule).toBeTruthy();
  });
});
