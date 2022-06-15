import { LightningElement } from 'lwc';

export default class Child extends LightningElement {
    name = 'Mani';
    childmethod(){
        this.name = 'Manichandra';
    }
}