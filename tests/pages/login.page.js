const Page = require('./defaultPage');

/** * sub page containing specific selectors and methods for a specific page */

class LoginPage extends Page {

    /**     * define selectors using getter methods */
    
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    /** * Method to encapsule automation code to interact with the page - e.g. to login with username and password */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /** * overwrite specific options to adapt it to page object */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();