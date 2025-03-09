import { expect } from "chai";
import { menu, displayProducts, displayCart, addProduct, changeQuantity, deleteProduct,displayInvoice, } from "../app.js";

describe("Testing the Bank functionalities", () => {

    //  test the add account
    it("display the menu", () => {
        const lengthBeforeAdding = getAccounts().length;

        const account = { accountNo: 505, name: 5000, price:10000 };
        addAccount(account);
        const lengthAfterAdding = getAccounts().length;

        expect(lengthAfterAdding).to.equal(lengthBeforeAdding + 1);

    })

    
    
    //  test the add account
    it("expect adding an account to increase the length of the account by 1", () => {
        const lengthBeforeAdding = getAccounts().length;

        const account = { id: 505, balance: 5000, type: 'Savings', name: 'Jane Doe' };
        addAccount(account);
        const lengthAfterAdding = getAccounts().length;

        expect(lengthAfterAdding).to.equal(lengthBeforeAdding + 1);

    })

    // delete account
    it("expect deleting an account to decrease the length of the account by 1", () => {
        const lengthBeforeDeleting = getAccounts().length;

        deleteAccount(505);
        const lengthAfterDeleting = getAccounts().length;

        expect(lengthAfterDeleting).to.equal(lengthBeforeDeleting - 1);

        
    })
})



