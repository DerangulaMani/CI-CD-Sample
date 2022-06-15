import { LightningElement,track } from 'lwc';

export default class BasicLWC extends LightningElement {
    fullname ;

    get name()
    {
        this.fullname = 'ManiChandra Derangula';
        return this.fullname;
    }

    //Output : -- name = 'ManiChandra Derangula'
}