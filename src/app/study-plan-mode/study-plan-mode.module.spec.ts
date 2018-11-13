import { StudyPlanModeModule } from './study-plan-mode.module';

describe('StudyPlanModeModule', () => {
  let studyPlanModeModule: StudyPlanModeModule;

  beforeEach(() => {
    studyPlanModeModule = new StudyPlanModeModule();
  });

  it('should create an instance', () => {
    expect(studyPlanModeModule).toBeTruthy();
  });
});
