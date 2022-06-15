import { LightningElement, wire } from 'lwc';
import {getObjectInfo} from 'lightning/uiObjectInfoApi'
import {getRecord} from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import ACCOUNT_NAME from '@salesforce/schema/Account.Name'
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone'
const fields = [ACCOUNT_NAME,ACCOUNT_PHONE];
export default class GetObjectInfoDemo extends LightningElement {

    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    objectInfo(response)
    {
        console.log(response);
    }

    @wire(getRecord,{recordId : '0015g00000UQWx1AAH',fields})
    Recordinformation({data,error})
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