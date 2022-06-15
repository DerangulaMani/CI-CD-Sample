import { LightningElement,wire } from 'lwc';
import { getObjectInfo,getObjectInfos } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
export default class WireServices extends LightningElement 
{
    Object = [ ACCOUNT_OBJECT, OPPORTUNITY_OBJECT ];
    @wire(getObjectInfos, { objectApiNames: '$Object' })
    propertyOrFunction(result)
    {
        if(result)
        { 
            console.log(result);
        }
    }
}