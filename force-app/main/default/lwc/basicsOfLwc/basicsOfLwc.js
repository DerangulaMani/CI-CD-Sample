import { LightningElement,track } from 'lwc';

export default class BasicsOfLwc extends LightningElement {
    @track fullname = 'Manichandra'
    @track fathername = 'Ramulu'

    changeHandler(event) {
        console.log(event);
        console.log(event.target);
        this[event.target.name] = event.target.value;
        console.log(event.target.value);
    }
}