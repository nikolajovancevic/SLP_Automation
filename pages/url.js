class Url {

//opens SLP page

    openLink(){
        browser.url('/');
    }

//check if browser is on a specific page

    checkURL(){
        browser.url(registration);
        expect(browser).toHaveUrlContaining('registration');
    }
    checkShopURL(){
        const url = this.browser.getUrl();
        expect(url).toHaveUrlContaining('shop');
    }
}

module.exports = new Url()