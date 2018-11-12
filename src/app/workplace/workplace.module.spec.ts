import { WorkplaceModule } from './workplace.module';

describe('WorkplaceModule', () => {
  let workplaceModule: WorkplaceModule;

  beforeEach(() => {
    workplaceModule = new WorkplaceModule();
  });

  it('should create an instance', () => {
    expect(workplaceModule).toBeTruthy();
  });
});
