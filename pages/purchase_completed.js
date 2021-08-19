class PurchaseCompleted {

//selectors

    get affirmation_message(){return $('//span [@class="page404-bold"]')};

//methods

    purchaseCompleted(){
        const purchase = this.affirmation_message.getText();
        strictEqual(purchase, 'Purchase completed.')
    }
}

module.exports = new PurchaseCompleted()