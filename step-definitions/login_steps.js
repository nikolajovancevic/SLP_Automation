//Logging in as registered user

const { Given, When, Then } = require('@cucumber/cucumber');
const Url = require('../pages/url');
const LoginPage = require('../pages/login');
const data = require('../config/data');

Given(/^I am on the login page$/, () => {
    Url.openLink();
    LoginPage.clickOnLoginHeader();
});
When(/^I login with username and password$/, () => {
    LoginPage.insertEmailAndPass(data.emailAddress, data.password);
    LoginPage.clickOnLoginButton();
});
Then(/^I should be logged in$/, () => {
    LoginPage.partnerOptionAvailable();
});

