import { LightningElement } from 'lwc';

export default class Sample extends LightningElement {
    message ;
    handleInput(event)
    {
        this.message = event.target.value;
    }
}