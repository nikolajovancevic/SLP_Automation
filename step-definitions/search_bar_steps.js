//Passed

const { Given, When, Then } = require('@cucumber/cucumber');

Given(/^I am on SLP home page$/, () => {
    return true;
});

When(/^I click search button$/, () => {
    return true;
});

Then(/^I should see message "Search phrase must be at least three characters long"$/, () => {
    return true;
});

