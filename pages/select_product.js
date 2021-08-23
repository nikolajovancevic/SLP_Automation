//selecting particular item from SLP for purchase

const BasePage = require("./basePage");

class SelectProduct extends BasePage {

//selectors

    get select_e_course(){return $('//a [@href="/e_courses/c5150489"]')};
    get select_event(){return $('//div [@class="card__price"]')};

//methods

    selectECourse(){
        this.click(this.select_e_course);
    }
    selectEvent(){
        this.click(this.select_event);
    }
    hoverProductToBuy(){
        this.select_e_course.moveTo({});
        this.click(this.select_e_course);
    }
}
module.exports = new SelectProduct()