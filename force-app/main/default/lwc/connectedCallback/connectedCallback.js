import { LightningElement } from 'lwc';

export default class ConnectedCallback extends LightningElement {
    connectedCallback()
    {
        console.log('Manichandra Inside Connected Callback');
    }
}