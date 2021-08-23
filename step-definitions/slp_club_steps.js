//Applying for SLP Club membership, payment with MasterCard

const { Given, When, Then } = require('@cucumber/cucumber');
const Url = require('../pages/url');
const data = require('../config/data');
const LoginPage = require('../pages/login');
const SLClub = require('../pages/sl_club');

Given(/^I am on SLC page as user$/,  () => {
    Url.openLink();
    LoginPage.clickOnLoginHeader();
    LoginPage.insertEmail(data.emailAddress);
    LoginPage.insertPassword(data.password);
    LoginPage.clickOnLoginButton();
    SLClub.slClubPage();
});

Then(/^I click on "Apply" button$/,  () => {
    SLClub.applyForMembership();
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
