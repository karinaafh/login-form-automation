const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const Environment = require('../utils/constant/environment')
const ErrorMessage = require('../utils/constant/error-message')

describe('User navigate to Login screen', () => {

    afterEach(async () => {
        await resetApplication();
    });

    it('Login with valid credentials', async () => {
        await driver.pause(2000);
        await LoginPage.inputUsername(Environment.VALID_USERNAME);
        await LoginPage.inputPassword(Environment.VALID_PASSWORD);
        await LoginPage.clickLogin();
        //Add assertion success message when able to login
    })

    it('Login without username', async () => {
        await driver.pause(2000);
        await LoginPage.inputPassword(Environment.VALID_PASSWORD);
        await LoginPage.emptyUsername();
        expect($(ErrorMessage.ERROR_USERNAME)).toBeDisplayed();
    })

    it('Login without password', async () => {
        await driver.pause(2000);
        await LoginPage.inputUsername(Environment.VALID_USERNAME);
        await LoginPage.emptyPassword();
        expect($(ErrorMessage.ERROR_PASSWORD)).toBeDisplayed();
    })

    it('Login without a username and password', async () => {
        await driver.pause(2000);
        await LoginPage.emptyUsername();
        await LoginPage.emptyPassword();
        await LoginPage.clickLogin();

    })

    it('Login with a username and password shorter than 5 characters.', async () => {
        await driver.pause(2000);
        await LoginPage.inputUsername(Environment.INVALID_USERNAME);
        await LoginPage.inputPassword(Environment.INVALID_PASSWORD);
        expect($(ErrorMessage.ERROR_PASSWORD)).toBeDisplayed();
    })
    
});

async function resetApplication() {
    await driver.terminateApp(Environment.ANDROID_APP_PACKAGE);
    await driver.activateApp(Environment.ANDROID_APP_PACKAGE);
}