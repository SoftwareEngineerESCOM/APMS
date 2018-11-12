import { UaPackagesModule } from './ua-packages.module';

describe('UaPackagesModule', () => {
  let uaPackagesModule: UaPackagesModule;

  beforeEach(() => {
    uaPackagesModule = new UaPackagesModule();
  });

  it('should create an instance', () => {
    expect(uaPackagesModule).toBeTruthy();
  });
});
