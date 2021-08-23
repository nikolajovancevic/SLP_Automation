//navigating to all events page

const BasePage = require("./basePage");

class AllEvents extends BasePage {

//selectors

    get events_menu(){return $('//a [@title="Events"]')};
    get all_events_option(){return $('//img [@alt="All Events"]')};

//methods

    eventsMenu(){
        this.click(this.events_menu);
    }
    allEventsOption(){
        this.click(this.all_events_option);
    }
}

module.exports = new AllEvents()