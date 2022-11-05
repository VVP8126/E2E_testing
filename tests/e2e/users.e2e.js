const UsersPage = require('../pages/users.page');

describe('Test Home page', () => {

    it('Data loading test', async () => {
        await UsersPage.load();
    });

    // Original example - doesn't work
    //it('Data delete test', async () => {
    //    await UsersPage.deleteUser();
    //});

});
