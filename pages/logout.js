const BasePage = require("./basePage");

class Logout extends BasePage {

//selectors
    get users_icon(){return $('//img [@id="test-avatar-icon"]')};
    get logout_button(){return $('//a [@id="test-logout-btn"]')};

//methods

    usersIcon(){
        this.click(this.users_icon);
    }
    logoutButton(){
        this.click(this.logout_button);
    }
}

module.exports = new Logout()