const { $ } = require('@wdio/globals')
const Environment = require('../utils/constant/environment')
const appPackage = Environment.ANDROID_APP_PACKAGE;

class LoginPage {

    get userNameField () {
        return $(`//*[@resource-id="${appPackage}:id/username"]`);
    }

    get passwordField () {
        return $(`//*[@resource-id="${appPackage}:id/password"]`);
    }

    get btnLogin () {
        return $(`//*[@resource-id="${appPackage}:id/login"]`);
    }

    async inputUsername(email) {
        await expect(this.userNameField).toBeDisplayed();
        await this.userNameField.setValue(email);
    }

    async emptyUsername() {
        await this.userNameField.click();
    }
    
    async inputPassword(password) {
        await expect(this.passwordField).toBeDisplayed();
        await this.passwordField.setValue(password);
    }

    async emptyPassword() {
        await this.passwordField.click();
    }

    async clickLogin () {
        await expect(this.btnLogin).toBeDisplayed();
        await this.btnLogin.click();
    }
}

module.exports = new LoginPage();