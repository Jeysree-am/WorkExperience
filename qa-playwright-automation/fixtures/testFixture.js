const base =require('@playwright/test');

exports.test = base.test.extend({
    loginPage: async ({ page }, use) => {
        const LoginPage = require('../pages/LoginPage');
        await use(new LoginPage(page));
    }
});
exports.expect = base.expect;

