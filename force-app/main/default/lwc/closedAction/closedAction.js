import { LightningElement,api} from 'lwc';
import OpportunityId from '@salesforce/schema/Opportunity.Id'
import OPPORTUNITYSTAGE from '@salesforce/schema/Opportunity.StageName'
import {updateRecord} from 'lightning/uiRecordApi'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ClosedAction extends LightningElement {

    @api recordId;
    @api invoke()
    {
        const fields = {};
        fields[OpportunityId.fieldApiName] = this.recordId;
        fields[OPPORTUNITYSTAGE.fieldApiName] = 'Closed'
        const recordInput = {fields}
        updateRecord(recordInput)
        .then(()=>{
            console.log('recordInput '+recordInput);
            this.showToast("Success!!", "Opportunity closed successfully", "success")
        }).catch(error=>{
            //error handling
            this.showToast("Error!!", error.message, "error")
        })
    }

    ShowToast(title,message,variant){
        this.dispatchEvent(new ShowToastEvent({
            title,message,variant
        }))
    }
    
}