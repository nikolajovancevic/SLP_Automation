//Logging in as registered user

const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/login_page');
const data = require('../config/data');

Given(/^I am on the login page$/,  () => {
    LoginPage.openLink();
    LoginPage.clickOnLoginHeader();
});
When(/^I login with username and password$/, () => {
    LoginPage.insertEmail(data.emailAddress);
    LoginPage.insertPassword(data.password);
    LoginPage.clickOnLoginButton();
});
Then(/^I should be logged in$/,  () => {
    LoginPage.partnerOptionAvailable();
});

