import { LightningElement,api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import ACCOUNTNAME from '@salesforce/schema/Account.Name'
import ACCOUNTINDUSTRY from '@salesforce/schema/Account.Industry'
import ACCOUNTNUMBER from '@salesforce/schema/Account.AccountNumber'
export default class LightningDataService extends LightningElement {
    objectName =  ACCOUNT_OBJECT;
    fieldsList = [ACCOUNTNAME,ACCOUNTINDUSTRY,ACCOUNTNUMBER]
    fieldsLists = {
        namefield : ACCOUNTNAME,
        AccountNumber : ACCOUNTNUMBER,
        industry : ACCOUNTINDUSTRY
    }
    recordId = '0015g00000OTItgAAH';
    successhandler(event)
    {
       const toastEvent =  new ShowToastEvent( {
            title : "Account Created",
            message: "Record Id : "+event.detail.id,
            variant : "success"
        }  ) 
        this.dispatchEvent(toastEvent);
    }
}