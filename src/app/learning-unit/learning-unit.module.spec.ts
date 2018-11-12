import { LearningUnitModule } from './learning-unit.module';

describe('LearningUnitModule', () => {
  let learningUnitModule: LearningUnitModule;

  beforeEach(() => {
    learningUnitModule = new LearningUnitModule();
  });

  it('should create an instance', () => {
    expect(learningUnitModule).toBeTruthy();
  });
});
