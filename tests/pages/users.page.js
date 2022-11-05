const Page = require('./userspage');

class UsersPage extends Page {

    get labelUserLoading() {
        return $('#lbl-user-loading');
    }
    get userList() {
        return $('#userlist');
    }
    get userItems() {
        try {
            return browser.react$$('User');
        } catch (error) {
            throw new Error("Error in selector using ... " + error.message);
        }
    }

    async load() {
        try {
            await this.open();
            await this.labelUserLoading.waitForDisplayed({timeout:1500});
            await this.userList.waitForDisplayed({timeout:1500});
        } catch (error) {
            throw new Error("Failed to load data. " + error.message);
        }
    }

    async deleteUser() {
        let usrs;
        try {
            await this.open();
            await this.labelUserLoading.waitForDisplayed({timeout:2000});
            await this.userList.waitForDisplayed({timeout:2000});
            // usrs = await browser.waitUntil(async() => {
            //    browser.react$$('User');
            // }, {timeoutMsg: 'Never found enough div elements'});
            await this.userItems;
            if(!usrs) {
                throw new Error("Users not found !");
            }
            const usersCount = usrs.length;
            if(!usersCount) {
                throw new Error("Users count is 0!");
            }
            await this.userItems[0].$("#del-user").click(); 
            const usersCountAfterDelete = await this.userItems.length;
            const diff = usersCount - usersCountAfterDelete;
            if(diff !== 1) {
                throw new Error(`Delete operation failed. Deleted ${diff} user(s) ...`);
            }
        } catch (error) {
            throw new Error("Failed to delete user. " + error.message + ", usrs=" + JSON.stringify(usrs));
        }
    }

    async open() {
        await super.open("/users");
    }

}
module.exports = new UsersPage();
