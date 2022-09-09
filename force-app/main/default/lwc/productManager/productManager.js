import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import addProduct from '@salesforce/apex/ParoductManager.createProduct';

export default class ProductManager extends LightningElement {
    name;
    price;
    sellDate;
    showMessage = false;

    handleNameChange(event) {
        this.name = event.detail.value;
    }
    handlePriceChange(event) {
        this.price = event.detail.value;
    }
    handleSellDateChange(event) {
        this.sellDate = event.detail.value;
    }

    handleAddButton() {
        this.showMessage = true;
    }

    showToast() {
        const event = new ShowToastEvent({
            title: 'Utworzyłeś nowe konto',
            message:
                'Utworzyłes konto',
            variant:'success'
        });
        this.dispatchEvent(event);
    }

    addNewProduct() {
        addProduct({
            'name':this.name

        }).then(() => {
            const event = new ShowToastEvent({
                title: 'Utworzyłeś nowy product',
                message:
                    'Utworzyłes product',
                variant:'success'
            });
            this.dispatchEvent(event);
        })
    }
}