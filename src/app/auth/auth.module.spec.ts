import { AuthModule } from './auth.module';

describe('AuthModule', () => {
  let authModule: AuthModule;

  beforeEach(() => {
    authModule = new AuthModule();
  });

  it('should create-human-resource an instance', () => {
    expect(authModule).toBeTruthy();
  });
});
