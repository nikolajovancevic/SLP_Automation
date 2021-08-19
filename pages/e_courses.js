class ECourses {

//selectors

    get videos_menu(){return $('//a [@title="Videos"]')};
    get e_courses(){return $('//a [@href="/e_courses"]')};

//methods

    videosMenu(){
        this.videos_menu.click();
    }
    eCourses(){
        this.e_courses.click();
    }
}

module.exports = new ECourses()