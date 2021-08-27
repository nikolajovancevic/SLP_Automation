//base page

module.exports = class BasePage {

    click(element){
        element.waitForDisplayed({timeout: 30000});
        element.click();
    }
    setValue(element, value){
        element.waitForDisplayed({timeout: 30000});
        element.setValue(value);
    }
    getText(element){
        element.waitForDisplayed({timeout: 30000});
        const text = element.getText();
        return text;
    }
    
}