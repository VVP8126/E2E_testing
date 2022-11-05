const Page = require('./page');

class HomePage extends Page {

    get toggleButton() {
        return $("#do_bttn");
    }

    get searchInput() {
        return $("#searchinput");
    }

    get resultLabel() {
        return $("#result");
    }

    async toggleLabel(text) {
        await this.searchInput.setValue(text);
        await this.toggleButton.click();
    }

    open() {
        return super.open("home");
    }
}
module.exports = new HomePage();
