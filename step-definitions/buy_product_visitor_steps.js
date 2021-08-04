//making purchase as a visitor, non-registered user

const { Given, When, Then } = require('@cucumber/cucumber');
const BuyProductVisitor = require('../pages/buy_product_visitor');

Given(/^I am on all events page as visitor$/,  () => {
    BuyProductVisitor.eventsMenu();
    BuyProductVisitor.getOnAllEventsPage();
});

Then(/^I select "I love cars and boats" event$/,  () => {
    BuyProductVisitor.selectEvent();
});

When(/^I click "Claim product" button$/, () => {
    BuyProductVisitor.claim_product();
});

Then(/^I should be relocated to SLP registration page$/,  () => {
    BuyProductVisitor.newURL();
});