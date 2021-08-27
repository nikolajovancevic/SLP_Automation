
//buying e-course
/*TODO case when cart is not empty and i click to claim FREE product, box pops-up
notifying me that cart will be emptied if i proceed, i have to confirm this action */

//test crashes when it comes to hover part, unable to find login_header element

const { Given, When, Then } = require('@cucumber/cucumber');
const Url = require('../pages/url');
const data = require('../config/data');
const LoginPage = require('../pages/login');
const ECourses = require('../pages/e_courses');
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
Given(/^I am on e-courses page$/, () => {
    ECourses.videosMenu();
    ECourses.eCourses();
});

When(/^I click on any free e-course$/, () => {
    SelectProduct.selectECourse();
});

//Button won't appear because i already own this course, thus test will crash
Then(/^I click "Claim E-course" button$/, () => {
    ClaimProduct.claimFreeProduct();
});

Then(/^I should see "Purchase completed." message$/, () => {
    PurchaseCompleted.purchaseCompleted();
});

Then(/^I logout$/, () => {
    Logout.usersIcon();
    Logout.logoutButton();
});

//Claiming a product by hovering over it  

When(/^I hover over the product and claim it/, () => {
    SelectProduct.hoverProductToBuy();
    ClaimProduct.hoverToClaimProduct();
});

/*clicking on "Claim product" button step is contained withing 
  buy_product_visitor_steps.js file
*/

Then(/^I should see "Purchase complete." message$/, () => {
    PurchaseCompleted.purchaseCompleted();
});

