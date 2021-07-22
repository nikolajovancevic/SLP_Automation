//Passing when executed alone
//First test, claiming free product by clicking on it 

const { Given, When, Then } = require('@cucumber/cucumber');

Given(/^I am on e-courses page$/,  () => {
    return true;
});

When(/^I click on any free e-course$/,  () => {
    return true;
});

Then(/^I click "Claim E-course" button$/, () => {
    return true;
});

Then(/^I should see "Purchase completed." message$/,  () => {
    return true;
});

//Second test, claiming product by hovering over it

When(/^I hover over the product$/,  () => {
    return true;
});

Then(/^I should see pop-up window$/, () => {
    return true;
});

Then(/^I click "Claim product" button$/,  () => {
    return true;
});

Then(/^I should see "Purchase complete." message$/,  () => {
    return true;
});

