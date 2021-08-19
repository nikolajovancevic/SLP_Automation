//making purchase as a visitor, non-registered user

const { Given, When, Then } = require('@cucumber/cucumber');
const Url = require('../config/url');
const AllEvents = require('../pages/all_events');
const SelectProduct = require('../pages/select_product');
const ClaimProduct = require('../pages/claim_product');

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
    Url.checkURL();
});