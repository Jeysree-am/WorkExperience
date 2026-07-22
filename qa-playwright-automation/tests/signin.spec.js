//const { test, expect } = require('@playwright/test');
const{test, expect} = require('../fixtures/testFixture');       
test('[@smoke] Login Test',async ({ page,loginPage }) => {
    //console.log(process.env.UI_BASE_URL);
    await page.goto(process.env.UI_BASE_URL);
    await loginPage.login(process.env.EMAIL, process.env.PASSWORD);
    await page.waitForTimeout(3000);
    const pageUrl= decodeURIComponent(await page.url());
    console.log(pageUrl);
    await page.pause();

    await expect(pageUrl).toContain('login');
}); 


