
//buying e-course

const { Given, When, Then } = require('@cucumber/cucumber');\
const Url = require('../config/url');
const data = require('../config/data');
const LoginPage = require('../pages/login');
const ECourses = require('../pages/e_courses');
const SelectProduct = require('../pages/select_product');
const ClaimProduct = require('../pages/claim_product')
const PurchaseCompleted = require('../pages/purchase_completed')

Given(/^I am logged in as user$/, () => {
    Url.openLink();
    LoginPage.clickOnLoginHeader();
    LoginPage.insertEmail(data.emailAddress);
    LoginPage.insertPassword(data.password);
    LoginPage.clickOnLoginButton();
});
Given(/^I am on e-courses page$/, () => {
    ECourses.videosMenu();
    ECourses.eCourses();
});

When(/^I click on any free e-course$/, () => {
    SelectProduct.selectECouse();
});

Then(/^I click "Claim E-course" button$/, () => {
    ClaimProduct.claimFreeProduct();
});

Then(/^I should see "Purchase completed." message$/, () => {
    PurchaseCompleted.purchaseCompleted();
});

//Claiming a product by hovering over it  

When(/^I hover over the product$/, () => {
    return true;
});

Then(/^I should see pop-up window$/, () => {
    return true;
});

/*clicking on "Claim product" button step is contained withing 
  buy_product_visitor_steps.js file
*/

Then(/^I should see "Purchase complete." message$/, () => {
    return true;
});

