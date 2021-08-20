class SLClub {

//selectors
    get sl_club_page(){return $('//a [@href="/sacret-life-club"]')};
    get apply_for_membership(){return $('//button [@class="apply_for_membership"]')};

//methods

    slClubPage(){
        this.sl_club_page.click();
    }
    applyForMembership(){
        this.apply_for_membership.click();
    }
}

module.exports = new SLClub()