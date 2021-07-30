//Logging in as registered user

const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/login_page');

Given(/^I am on the login page$/,  () => {
    LoginPage.clickOnLoginHeader();
});

When(/^I login with username and password$/, () => {
    return true;
});

Then(/^I should be logged in$/,  () => {
    return true;
});

