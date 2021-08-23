//different buttons for pucrhase or adding to chart

const BasePage = require("./basePage")

class ClaimProduct extends BasePage {

//selectors

    get claim_free_product(){return $('//button [@class="btn-purple claim-free-product"]')};
    get buy_product(){return $('//button [@class="add-to-bucket btn-purple"]')};
    get add_to_chart(){return $('//a [@class="btn-purple product__prices-scroll"]')};
    get hover_claim_product(){return $('//a [@id="claim-free-product"]')};
    get hover_add_to_bucket(){return $('//a [@id="add-to-bucket"]')};

//method

    claimFreeProduct(){
        this.click(this.claim_free_product);
    }
    buyProduct(){
        this.click(this.buy_product);
    }
    addToChart(){
        this.click(this.add_to_chart);
    }
    hoverToClaimProduct(){
        this.hover_claim_product.moveTo({});
        this.click(this.hover_claim_product);
    }
    hoverAddToBucket(){
        this.hover_add_to_bucket.moveTo({});
        this.click(this.hover_add_to_bucket);
    }
}

module.exports = new ClaimProduct()