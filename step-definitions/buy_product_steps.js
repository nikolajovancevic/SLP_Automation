
//Claiming free product by clicking on a product 

const { Given, When, Then } = require('@cucumber/cucumber');

Given(/^I am on e-courses page$/,  () => {
    return true;
});

When(/^I click on any free e-course$/,  () => {
    return true;
});

Then(/^I click "Claim E-course" button$/, () => {
    return true;
});

Then(/^I should see "Purchase completed." message$/,  () => {
    return true;
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

