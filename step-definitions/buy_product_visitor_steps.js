//making purchase as a visitor, non-registered user

const { Given, When, Then } = require('@cucumber/cucumber');
const Url = require('../pages/url');
const AllEvents = require('../pages/all_events');
const SelectProduct = require('../pages/select_product');
const ClaimProduct = require('../pages/claim_product');
const { registrationPage } = require('../config/data');

Given(/^I am on all events page as visitor$/,  () => {
    Url.openLink();
    AllEvents.eventsMenu();
    AllEvents.allEventsOption();
});

Then(/^I select event$/,  () => {
    SelectProduct.selectEvent();
});

When(/^I click "Claim product" button$/, () => {
    ClaimProduct.claimFreeProduct();
});

Then(/^I should be relocated to SLP registration page$/,  () => {
    Url.checkURL(data.registrationPage);
});