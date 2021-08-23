//navigating to e-courses page

const BasePage = require("./basePage");

class ECourses extends BasePage {

//selectors

    get videos_menu(){return $('//a [@title="Videos"]')};
    get e_courses(){return $('//a [@href="/e_courses"]')};

//methods

    videosMenu(){
        this.click(this.videos_menu);
    }
    eCourses(){
        this.click(this.e_courses);
    }
}

module.exports = new ECourses()