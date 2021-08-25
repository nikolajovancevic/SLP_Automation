//Filtering produts by prince range

const { Given, When, Then } = require('@cucumber/cucumber');
const Url = require('../pages/url');
const AllEvents = require('../pages/all_events');

Given (/^I am on all events page$/,  () => {
    Url.openLink();
    AllEvents.eventsMenu();
    AllEvents.allEventsOption();
});

When (/^I click on "Price" option$/,  () => {
    return true;
});

Then (/^I select price range "0-100"$/, () => {
    return true;
});

Then (/^I click "Search" button$/,  () => {
    return true;
});

Then (/^I should only see products in that price range$/, () => {
    return true;
});

//Filtering product by date

When (/^I click on "Date" option$/,  () => {
    return true;
});

Then (/^I select "Past events"$/, () => {
    return true;
});

Then (/^I should only see events before current date$/,  () => {
    return true;
});

//Filtering product by manually setting date range 

When (/^I click on "Enter dates"$/,  () => {
    return true;
});

Then (/^I enter specific date range$/, () => {
    return true;
});

Then (/^I should see product in that range$/,  () => {
    return true;
});