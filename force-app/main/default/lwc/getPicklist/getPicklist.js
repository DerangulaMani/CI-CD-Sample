import { LightningElement,wire } from 'lwc';
import { getObjectInfo,getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
export default class GetPicklist extends LightningElement {
    @wire(getObjectInfo,{apiName :ACCOUNT_OBJECT })
    objectInfodata({data,error})
    {
        if(data)
        {
            console.log(data);
        }
        if(error)
        {
            console.log(error);
        }
    }
}