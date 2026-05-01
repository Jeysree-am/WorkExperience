const Basepage = require("./Basepage");
class LoginPage extends Basepage{
    constructor(page){
        super(page);    
        this.email = page.getByRole('textbox', { name: 'Email' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.signIn = page.locator("button[type='submit']");
    }
    async login(email, password){
        await this.email.fill(email);
        await this.password.fill(password);
        await this.signIn.click();
    }
}
module.exports = LoginPage; 