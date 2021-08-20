class SelectProduct {

//selectors

    get select_e_course(){return $('//a [@href="/e_courses/c5150489"]')};
    get select_event(){return $('//div [@class="card__price"]')};

//methods

    selectECourse(){
        this.select_e_course.click();
    }
    selectEvent(){
        this.select_event.click();
    }
    hoverProductToBuy(){
        this.select_e_course.elementHover();
    }

}
module.exports = new SelectProduct()