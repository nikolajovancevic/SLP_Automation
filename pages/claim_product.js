class ClaimProduct {

//selectors

    get claim_free_product(){return $('//button [@class="btn-purple claim-free-product"]')};
    get buy_product(){return $('//button [@class="add-to-bucket btn-purple"]')};
    get add_to_chart(){return $('//a [@class="btn-purple product__prices-scroll"]')};
    get hover_claim_product(){return $('//a [@id="claim-free-product"]')};
    get hover_add_to_bucket(){return $('//a [@id="add-to-bucket"]')};

//method

    claimFreeProduct(){
        this.claim_free_product.waitForDisplay(30000);
        this.claim_free_product.click();
    }
    buyProduct(){
        this.buy_product.click();
    }
    addToChart(){
        this.add_to_chart.click();
    }
    hoverTolaimProduct(){
        this.hover_claim_product.click();
    }
    hoverAddToBucket(){
        this.hover_add_to_bucket.click();
    }
}

module.exports = new ClaimProduct()