


class LoginPage {

//selectors

    get login_header(){return $('//a [@class="toggle-color"]')};
    get email_field(){return $('//input [@id="email"]')};
    get password_field(){return $('//input [@id="password"]')};
    get login_button(){return $('//button [@id="log-in"]')};
    get partner_option(){return $('//li [@id="test-partner"] /a')};
    get become_partner_option(){return $('//img [@alt="Become a partner"] ')};

//methods

    clickOnLoginHeader(){
        this.login_header.click();
    }
    insertEmail(email){
        this.email_field.addValue(email);
    }
    insertPassword(pass){
        this.password_field.addValue(pass);
    }
    clickOnLoginButton(){
        this.login_button.click();
    }
    partnerOptionAvailable() {
        this.partner_option.click()
        console.log(this.become_partner_option.getProperty('Become a partner'));  
    }
    openLink(){
        browser.url('/');
    }
}

module.exports = new LoginPage()