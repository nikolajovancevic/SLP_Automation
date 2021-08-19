class AllEvents {

//selectors

    get events_menu(){return $('//a [@title="Events"]')};
    get all_events_option(){return $('//img [@alt="All Events"]')};

//methods

    eventsMenu(){
        this.events_menu.click();
    }
    allEventsOption(){
        this.all_events_option.click();
    }
}

module.exports = new AllEvents()