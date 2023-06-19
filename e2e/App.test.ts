// e2e/App.spec.ts
import { by, device, element, waitFor } from 'detox';

describe('App Navigation', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show the Login screen if not logged in', async () => {
    await waitFor(element(by.id('loginScreen')))
      .toBeVisible()
      .withTimeout(2000);
  });

  it('should navigate to the signup screen when "create account" is selected', async () => {
    await element(by.text('Create account')).tap();
    await waitFor(element(by.id('signupScreen')))
      .toBeVisible()
      .withTimeout(2000);
  });

  it('should navigate to the login screen when "already have an account" is selected', async () => {
    await element(by.text('Create account')).tap();
    await waitFor(element(by.id('signupScreen')))
      .toBeVisible()
      .withTimeout(2000);
    await element(by.text('Already have an account')).tap();
    await waitFor(element(by.id('loginScreen')))
      .toBeVisible()
      .withTimeout(2000);
  });
});
