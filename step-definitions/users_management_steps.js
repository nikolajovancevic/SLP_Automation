//Passed

const { Given, When, Then } = require('@cucumber/cucumber');

Given(/^I am logged in to SLP as admin$/,  () => {
    return true;
});

When(/^I click on "Assign premium \(sl-club\)"$/, () => {
    return true;
});

Then(/^I click "Ok" button on pop-up box$/,  () => {
    return true;
});
