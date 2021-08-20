//Logged in to SLP, subscribing to a particular shop

const { Given, When, Then } = require('@cucumber/cucumber');
const Url = require('../config/url');
const data = require('../config/data');
const LoginPage = require('../pages/login');
const Shop = require('../pages/shop');
const data = require('../config/data');

Given(/^I am on shops page$/, () => {
    Url.openLink();
    LoginPage.clickOnLoginHeader();
    LoginPage.insertEmail(data.emailAddress);
    LoginPage.insertPassword(data.password);
    LoginPage.clickOnLoginButton();
    Shop.shopsPage();
});

When(/^I click on shop$/, () => {
    Shop.selectShop();
});

Then(/^I am relocated to shops page$/, () => {
    Url.checkShopURL();
});

Then(/^I enter my email into "Your email address" field$/,  () => {
    Shop.shopEmailField();
    LoginPage.insertEmail(data.emailAddress);
});

Then(/^I click "Subscribe" button$/, () => {
    Shop.shopSubscribeButton();
});