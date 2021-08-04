
class BuyProductVisitor {

    get events_menu(){return $('//a [@title="Events"]')};
    get all_events_page(){return $('//a [@href="/events"]')};
    get select_event(){return $('//a [@href="/events/e3797342"]')};
    get claim_product(){return $('//button [@data-idevent="e3797342"]')};
    get purchase_completed(){return $('//span [@class="page404-bold"] ')};

    eventsMenu(){
        this.events_menu.click();
    }
    getOnAllEventsPage(){
        this.all_events_page.click();
    }
    selectEvent(){
        this.select_event.click();
    }
    claimProduct(){
        this.claim_product.click();
    }
    purchaseCompleted(){
        const purchase = this.purchase_completed.getText();
        strictEqual(purchase, 'Purchase completed.')
    }
}

module.exports = new BuyProductVisitor()