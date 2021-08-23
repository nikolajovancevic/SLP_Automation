//urls

const BasePage = require("./basePage");

class Url extends BasePage {

//opens SLP page

    openLink(){
        browser.url('/');
    }

//check if browser is on a specific page

    checkURLParmeter(urlParam){
        const url = this.browser.getUrl();
        expect(url).toHaveUrlContaining(urlParam);
    }
}

module.exports = new Url()