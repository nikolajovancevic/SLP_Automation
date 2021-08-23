//Applying for SL Club membership

const BasePage = require("./basePage");

class SLClub extends BasePage{

//selectors
    get sl_club_page(){return $('//a [@href="/sacret-life-club"]')};
    get apply_for_membership(){return $('//button [@class="apply_for_membership"]')};

//methods

    slClubPage(){
        this.click(this.sl_club_page);
    }
    applyForMembership(){
        this.click(this.apply_for_membership);
    }
}

module.exports = new SLClub()