class BasePage {
    constructor(page){
        this.page = page;
        }
        async click(locator){
            await this.page.locator(locator).click();
        }
        async fill(locator, value){
            await this.page.locator(locator).fill(value);
        }
        async waitFor(){
            await this.page.locator(locator).waitFor();
        }
    }
    module.exports = BasePage;
    

