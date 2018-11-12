import { AcademicProgramModule } from './academic-program.module';

describe('AcademicProgramModule', () => {
  let academicProgramModule: AcademicProgramModule;

  beforeEach(() => {
    academicProgramModule = new AcademicProgramModule();
  });

  it('should create an instance', () => {
    expect(academicProgramModule).toBeTruthy();
  });
});
