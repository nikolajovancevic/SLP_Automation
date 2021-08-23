//affirmation message when successful purchase is made

const BasePage = require("./basePage");
const { strictEqual } = require('assert');

class PurchaseCompleted extends BasePage {

//selectors

    get affirmation_message(){return $('//span [@class="page404-bold"]')};

//methods

    purchaseCompleted(){
        const purchase = this.getText(this.affirmation_message);
        strictEqual(purchase, 'Purchase completed.');
        //strictEqual(this.getText(this.affirmation_message), 'Purchase completed.'));
    }
}

module.exports = new PurchaseCompleted()