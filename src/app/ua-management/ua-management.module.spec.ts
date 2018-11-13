import { UaManagementModule } from './ua-management.module';

describe('UaManagementModule', () => {
  let uaManagementModule: UaManagementModule;

  beforeEach(() => {
    uaManagementModule = new UaManagementModule();
  });

  it('should create an instance', () => {
    expect(uaManagementModule).toBeTruthy();
  });
});
