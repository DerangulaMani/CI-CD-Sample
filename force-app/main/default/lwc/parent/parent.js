import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    fullname
    HandlingChildMethod(event)
    {
        this.fullname = this.template.querySelector('c-child').childmethod();
        console.log(this.fullname);
    }
}