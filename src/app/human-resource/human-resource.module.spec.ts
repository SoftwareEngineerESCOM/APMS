import { HumanResourceModule } from './human-resource.module';

describe('HumanResourceModule', () => {
  let humanResourceModule: HumanResourceModule;

  beforeEach(() => {
    humanResourceModule = new HumanResourceModule();
  });

  it('should create-human-resource an instance', () => {
    expect(humanResourceModule).toBeTruthy();
  });
});
