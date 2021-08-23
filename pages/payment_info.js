
class PaymentInfo {

//selectors

    get first_name_field(){return $('')};
    get last_name_field(){return $('')};
    get adress_field(){return $('')};
    get city_field(){return $('')};
    get zip_code_field(){return $('')};
    get country_field(){return $('')};
    get email_field(){return $('')};
    get contact_phone_field(){return $('')};
    get cash_invoice_box(){return $('')};
    get credit_card_button(){return $('')};
    get wire_transfer_button(){return $('')};
    get cancel_button(){return $('')};

//methods
    firstName(){
        this.first_name_field.addValue(firstName);
    }
    lastName(){
        this.last_name_field.addValue(lastName);
    }
    adressField(){
        this.adress_field.addValue(adress);
    }
    cityField(){
        this.city_field.addValue(city);
    }
    zipCodeField(){
        this.zip_code_field.addValue(zipCode);
    }
    countryField(){
        this.country_field.addValue(country);
    }
    emailField(){
        this.email_field.addValue(email)
    }
    contactPhoneField(){
        this.contact_phone_field.addValue(contactPhone);
    }
    cashInvoiceBox(){
        this.cash_invoice_box.click();
    }
    creditCardButton(){
        this.credit_card_button.click();
    }
    wireTransferButton(){
        this.wire_transfer_button.click();
    }
    cancelButton(){
        this.cancel_button.click();
    }
}

module.exports = new PaymentInfo()