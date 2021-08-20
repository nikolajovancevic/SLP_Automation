
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
        this.first_name_field.addValue(firstName)
    }

}

module.exports = new PaymentInfo()