import { LightningElement,track } from 'lwc';

export default class Trackproperty extends LightningElement {
    fullname;
    age;
    changeHandler(event){
        this[event.target.name] = event.target.value;
        this[event.target.name] = event.target.value;
    }
}