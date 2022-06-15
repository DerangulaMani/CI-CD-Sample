import { LightningElement, wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
export default class ParentMulticombo extends LightningElement { 
    picklistValues;
    error;
    @wire(getPicklistValues, { 
        recordTypeId: '012000000000000AAA', fieldApiName: INDUSTRY_FIELD 
    })
    wiredPicklist({ error, data }){
        
        if(data){
            this.picklistValues = data.values;
            console.log(' data ', data.values);
            this.error = undefined;
        }
        if(error){
            this.picklistValues = undefined;
            this.error = error;
        }
    }

    handleValueChange(event){
        console.log(JSON.stringify(event.detail));
    }

}