import { LightningElement, wire } from "lwc";
import getAcc from "@salesforce/apex/AccountSelector.getAccounts";

export default class Accounts extends LightningElement {
  connectedCallback() {
    getAcc({ name: "Tomek" }).then((result) => {
      console.log("result");
      console.log(result);
    });
  }
  /*@wire(getAcc, {name:'Tomek'})
    search(result) {
        console.log('results');
    }*/

  handleAction() {
    getAcc({ name: "Tomek" }).then((result) => {
      console.log("result");
      console.log(result);
    });
  }
}
