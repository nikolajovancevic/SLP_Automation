//Logging in as registered user

const { Given, When, Then } = require('@cucumber/cucumber');

Given(/^I am on the login page$/,  () => {
    return true;
});

When(/^I login with username and password$/, () => {
    return true;
});

Then(/^I should be logged in$/,  () => {
    return true;
});

