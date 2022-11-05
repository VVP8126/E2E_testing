const HomePage = require('../pages/home.page');

describe('Test Home page', () => {

    it('Click test - success result', async () => {
        await HomePage.open();
        await HomePage.toggleLabel("toggle");
        await expect(HomePage.resultLabel).toBeExisting();
        await HomePage.toggleButton.click();
        await expect(HomePage.resultLabel).not.toBeExisting();
    });

    it('Click test - failed result', async () => {
        await HomePage.open();
        await HomePage.toggleLabel("fake");
        await expect(HomePage.resultLabel).not.toBeExisting();
    });

});
