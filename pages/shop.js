class Shop {

//selectors

    get shops_page(){return $('//a [@href="/shops"]')};
    get select_shop(){return $('//div [@class="card__wrapper"]')};
    get shop_email_field(){return $('//input[@type="email"]')};
    get shop_subscribe_button(){return $('//button [@class="subscription--btn"]')};

//methods

    shopsPage(){
        this.shops_page.click();
    }
    selectShop(){
        this.select_shop.click();
    }
    shopEmailField(){
        this.shop_email_field.addValue(email);
    }
    shopSubscribeButton(){
        this.shop_subscribe_button.click();
    }
}

module.exports = new Shop()