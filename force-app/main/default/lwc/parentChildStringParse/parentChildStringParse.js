import { LightningElement,api } from 'lwc';

export default class ParentChildStringParse extends LightningElement {
    @api countryname
    @api familydata
    @api percentage 
    @api header
    @api body
    name = 'Manichandra'
    @api childMethod(){
        this.name = 'Derangula Manichandra'
    }
    clickbutton() {
        this.dispatchEvent(new CustomEvent('close'))
    }
}