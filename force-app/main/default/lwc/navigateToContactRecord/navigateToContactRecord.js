import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils';
export default class NavigateToContactRecord extends NavigationMixin(LightningElement)
{
    NavigateToNewRecord()
    {
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes :{
                objectApiName : 'Contact',
                actionName : 'new'
            }
        })
    }

    NavigateWithDefaultRecord()
    {
       var defaultvalues =  encodeDefaultFieldValues({
            FirstName : 'MANI',
            LastName  : 'Chandra',
            LeadSource: 'Other'
        })
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes :{
                objectApiName : 'Contact',
                actionName : 'new'
            },
            state:{
                defaultFieldValues : defaultvalues
            }
    })
    NavigateToRecentlist()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes : {
                objectApiName : 'Contact',
                actionName : 'list'
            },
            state:{
                filterName : 'Recent'
            }
        })
    }

    NavigateTofiles()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes : {
                objectApiName : 'ContentDocument',
                actionName : 'home'
            }
        })
    }

    NavigateViewOrEdit()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                recordId : '0035g00000D2Rt4AAF',
                objectApiName : 'Contact',
                actionName : 'view'
                //actionName:'edit'
            }
        })       
    }

    // NavigateToTab.(94)
    NavigateToTab()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes : {
                apiName : 'Lwc_Fundamentals'
            }
        })
    }
    // NavigateToRecordRelationShipPage.(95)
    NavigateToRecordRelationShipPage()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes : {
                recordId : '0035g00000D2Rt4AAF',
                objectApiName : 'Account',
                relationshipApiName:'Contacts',
                actionName : 'view'
            }
        })
    }
}
}