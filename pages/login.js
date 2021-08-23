const BasePage = require("./basePage");
const { strictEqual } = require('assert');

class LoginPage extends BasePage {

//selectors

    get login_header(){return $('//a [@class="toggle-color"]')};
    get email_field(){return $('//input [@id="email"]')};
    get password_field(){return $('//input [@id="password"]')};
    get login_button(){return $('//button [@id="log-in"]')};
    get partner_option(){return $('//a [@title="Partner"]')};
    get become_partner_option(){return $('//img [@alt="Become a partner"]')};

//methods

    clickOnLoginHeader(){
        this.login_header.waitForDisplayed();
        if(this.login_header.isDisplayed()){
            this.click(this.login_header);
        }
    }
    insertEmailAndPass(email, pass){
        this.setValue(this.email_field, email);
        this.setValue(this.password_field, pass);
    }
    clickOnLoginButton(){
        this.click(this.login_button);
    }
    partnerOptionAvailable() {
        const partner = this.getText(this.become_partner_option);
        strictEqual(partner, 'Become a partner')  
    }
}

module.exports = new LoginPage()