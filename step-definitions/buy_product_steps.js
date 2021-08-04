
//Claiming free product by clicking on a product 

const { Given, When, Then } = require('@cucumber/cucumber');
const BuyProduct = require('../pages/buy_product');
const LoginPage = require('../pages/login_page');
const data = require('../config/data');

Given(/^I am logged in as user$/,  () => {
    LoginPage.openLink();
    LoginPage.clickOnLoginHeader();
    LoginPage.insertEmail(data.emailAddress);
    LoginPage.insertPassword(data.password);
    LoginPage.clickOnLoginButton();
});
Given(/^I am on e-courses page$/,  () => {
    BuyProduct.getOnECoursesPage();
});

When(/^I click on any free e-course$/,  () => {
    BuyProduct.selectCourse();
});

Then(/^I click "Claim E-course" button$/, () => {
    BuyProduct.claimCourse();
});

Then(/^I should see "Purchase completed." message$/,  () => {
    BuyProduc.purchase_confirmation_message();
});

//Claiming a product by hovering over it  

When(/^I hover over the product$/,  () => {
    return true;
});

Then(/^I should see pop-up window$/, () => {
    return true;
});

/*clicking on "Claim product" button step is contained withing 
  buy_product_visitor_steps.js file
*/

Then(/^I should see "Purchase complete." message$/,  () => {
    return true;
});

