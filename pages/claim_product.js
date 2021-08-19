class ClaimProduct {

//selectors

    get claim_free_product(){return $('//button [@class="btn-purple claim-free-product"]')};
    get buy_product(){return $('//button [@class="add-to-bucket btn-purple"]')};
    get add_to_chart(){return $('//a [@class="btn-purple product__prices-scroll"]')};
    
//method

    claimFreeProduct(){
        this.claim_free_product.click();
    }
    buyProduct(){
        this.buy_product.click();
    }
    addToChart(){
        this.add_to_chart.click();
    }
}

module.exports = new ClaimProduct()