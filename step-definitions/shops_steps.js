//Logged in to SLP, subscribing to a particular shop

const { Given, When, Then } = require('@cucumber/cucumber');

Given(/^I am on shops page$/,  () => {
    return true;
});

When(/^I click on "All About Crypto" shop$/, () => {
    return true;
});

Then(/^I am relocated to shops page$/,  () => {
    return true;
});

Then(/^I enter my email into "Your email address" field$/,  () => {
    return true;
});

Then(/^I click "Subscribe" button$/,  () => {
    return true;
});