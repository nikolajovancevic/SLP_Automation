//Applying for SLP Club membership, payment with MasterCard

const { Given, When, Then } = require('@cucumber/cucumber');

Given(/^I am on SLC page as user$/,  () => {
    return true;
});

Then(/^I click on "Apply" button$/,  () => {
    return true;
});

Then(/^I enter payment info and I choose master card$/,  () => {
    return true;
});

When(/^I enter master card info and click "Pay" button$/, () => {
    return true;
});

Then(/^I should see message "Thank you for applying for subscription"$/,  () => {
    return true;
});
