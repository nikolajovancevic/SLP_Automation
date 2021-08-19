class Url {

//opens SLP page

    openLink(){
        browser.url('/');
    }

//check if browser is on a specific page

    checkURL(){
        browser.url('https://stage.sacret-life.com/en/registration');
        expect(browser).toHaveUrlContaining('registration');
    }
}

module.exports = new Url()