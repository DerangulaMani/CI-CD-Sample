import { LightningElement,wire } from 'lwc';
import {getObjectInfos} from 'lightning/uiObjectInfoApi'
import {getObjectInfo} from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
export default class GetObjectInfos extends LightningElement {



    @wire(getObjectInfo,{objectApiName : ACCOUNT_OBJECT})
    objectInfodata(response)
    {
        console.log(`Account data {$response}`);
    }
}