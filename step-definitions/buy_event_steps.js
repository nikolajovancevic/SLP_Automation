//claiming free event

const { Given, When, Then } = require('@cucumber/cucumber');
const Url = require('../pages/url');
const data = require('../config/data');
const LoginPage = require('../pages/login');
const AllEvents = require('../pages/all_events');
const SelectProduct = require('../pages/select_product');
const ClaimProduct = require('../pages/claim_product');
const PurchaseCompleted = require('../pages/purchase_completed');
const Logout = require ('../pages/logout');

Given(/^I am logged in as user$/, () => {
    Url.openLink();
    LoginPage.clickOnLoginHeader();
    LoginPage.insertEmailAndPass(data.emailAddress, data.password);
    LoginPage.clickOnLoginButton();
});
Given(/^I am on all events page$/, () => {
    AllEvents.eventsMenu();
    AllEvents.allEventsOption();
});

When(/^I click on any free event$/, () => {
    SelectProduct.selectEvent();
});

Then(/^I click "Claim product" button$/, () => {
    ClaimProduct.claimFreeProduct();
});

Then(/^I should see "Purchase completed." message$/, () => {
    PurchaseCompleted.purchaseCompleted();
});

Then(/^I logout$/, () => {
    Logout.usersIcon();
    Logout.logoutButton();
});