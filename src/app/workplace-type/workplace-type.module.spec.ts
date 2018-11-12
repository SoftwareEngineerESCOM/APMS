import { WorkplaceTypeModule } from './workplace-type.module';

describe('WorkplaceTypeModule', () => {
  let workplaceTypeModule: WorkplaceTypeModule;

  beforeEach(() => {
    workplaceTypeModule = new WorkplaceTypeModule();
  });

  it('should create an instance', () => {
    expect(workplaceTypeModule).toBeTruthy();
  });
});
