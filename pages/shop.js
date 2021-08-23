//SLP shops page

const BasePage = require("./basePage");

class Shop extends BasePage {

//selectors

    get shops_page(){return $('//a [@href="/shops"]')};
    get select_shop(){return $('//div [@class="card__wrapper"]')};
    get shop_email_field(){return $('//input[@type="email"]')};
    get shop_subscribe_button(){return $('//button [@class="subscription--btn"]')};

//methods

    shopsPage(){
        this.click(this.shops_page);
    }
    selectShop(){
        this.click(this.select_shop);
    }
    shopEmailField(email){
        this.setValue(this.shop_email_field, email);
    }
    shopSubscribeButton(){
        this.click(this.shop_subscribe_button);
    }
}

module.exports = new Shop()