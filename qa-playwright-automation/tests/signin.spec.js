const{test, expect} = require('../fixtures/testfixture');       
test('[@smoke] Login Test',async ({ loginPage,page }) => {
    await page.goto(process.env.BASE_URL);
    await loginPage.login(process.env.EMAIL, process.env.PASSWORD);
    await expect(page).toHaveURL('https://qa.cutq.sanvi.ai/'); 
}); 


