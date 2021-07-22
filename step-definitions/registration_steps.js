//getting skiped

const { Given, When, Then } = require('@cucumber/cucumber');

Given (/^I am on registration page$/, () => {
    return true;
});

Then (/^I register with registration data$/, () => {
    return true;
});

Then (/^I should see message "Please check your email for account verification"$/,() => {
    return true;
});

Then (/^I open mail recieved from SLP$/, () => {
    return true;
});

When (/^I click on "Verify account" button$/, () => {
    return true;
});

Then (/^I am redirected to SLP and see message "Email is verified"$/, () => {
    return true;
});