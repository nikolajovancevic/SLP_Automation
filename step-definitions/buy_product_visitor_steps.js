//making purchase as a visitor, non-registered user

const { Given, When, Then } = require('@cucumber/cucumber');
const data = require ('../config/data');
const Url = require('../pages/url');

Then(/^I should be relocated to SLP registration page$/,  () => {
    Url.checkURLParmeter(data.registrationPage);
});