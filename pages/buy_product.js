
class BuyProduct  {

    get e_courses_page() { return $('//a [@href="/e_courses"]')};
    get select_course() { return $('//div [@class="card__image--vertical"]')};
    get claim_course() { return $('//button [@class="btn-purple claim-free-product"]')};
    get purchase_confirmation_message() {return $('//span [@class="page404-bold"]')};

    getOnECoursesPage(){
        this.e_courses_page.click();
    }
    selectCourse(){
        this.select_course.click();
    }
    claimCourse(){
        this.claim_course.click();
    }
    purchaseConfirmationMessage(){
        console.log(this.purchase_confirmation_message.getProperty());
    }
    openLink(){
        browser.url('/');
    }
}

module.exports = new BuyProduct()