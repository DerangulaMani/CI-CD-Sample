import { LightningElement,api } from 'lwc';

export default class CSVGeneration extends LightningElement 
{
    @api recordId;
    @api invoke()
    {
        console.log(' recordId '+this.recordId);
        window.open("https://google.com","_blank");
    }
}