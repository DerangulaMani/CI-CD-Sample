import { LightningElement,track } from 'lwc';

export default class BasicLWC extends LightningElement {
    fullname ;

    get name()
    {
        this.fullname = 'Mani';
        return this.fullname;
    }
}