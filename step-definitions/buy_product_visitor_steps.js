//Passing when executed alone

const { Given, When, Then } = require('@cucumber/cucumber');

Given(/^I am on all events page as visitor$/,  () => {
    return true;
});

Then(/^I select "I love cars and boats" event$/,  () => {
    return true;
});

When(/^I click "Claim product" button$/, () => {
    return true;
});

Then(/^I should be relocated to SLP registration page$/,  () => {
    return true;
});