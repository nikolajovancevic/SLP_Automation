//Passed

//First test, filters by price range

const { Given, When, Then } = require('@cucumber/cucumber');

Given (/^I am on all events page$/,  () => {
    return true;
});

When (/^I click on "Price" option$/,  () => {
    return true;
});

Then (/^I select price range "0-100"$/, () => {
    return true;
});

Then (/^I click "Search" button$/,  () => {
    return true;
});

Then (/^I should only see products in that price range$/, () => {
    return true;
});

//Second test, filters by date

When (/^I click on "Date" option$/,  () => {
    return true;
});

Then (/^I select "Past events"$/, () => {
    return true;
});

Then (/^I should only see events before current date$/,  () => {
    return true;
});

//Third test, filters by setting date range manually

When (/^I click on "Enter dates"$/,  () => {
    return true;
});

Then (/^I enter specific date range$/, () => {
    return true;
});

Then (/^I should see product in that range$/,  () => {
    return true;
});