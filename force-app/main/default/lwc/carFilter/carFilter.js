import {LightningElement,track,wire} from 'lwc';
import {getObjectInfo,getPicklistValues } from 'lightning/uiObjectInfoApi';
import CAR_OBJECT from '@salesforce/schema/Car__c'
import CATEGORY_OBJECT from '@salesforce/schema/Car__c.Category__c'
import MAKE_OBJECT from '@salesforce/schema/Car__c.Make__c'
import {publish,MessageContext} from 'lightning/messageService';
import CARS_FILTERED_MESSAGE from '@salesforce/messageChannel/CarsFiltered__c';
export default class CarFilter extends LightningElement {
    // filter.searchkey
     filter = {
        searchkey : '',
        maxvalue : 999999
    }
    timer
    // It Showing Object Information.
    @wire(getObjectInfo, {objectApiName:CAR_OBJECT})
    showCardata;

    /* Load The Context For LMS*/
    @wire(MessageContext)
    messageContext;

    // Here We Will GET Category Picklist Information.
    @wire(getPicklistValues, {recordTypeId : '$showCardata.data.defaultRecordTypeId',
    fieldApiName : CATEGORY_OBJECT
    })
    categoryPicklist;

    @wire(getPicklistValues, {recordTypeId : '$showCardata.data.defaultRecordTypeId',
    fieldApiName : MAKE_OBJECT
    })
    MakePicklist;

    handleSearchkey(event)
    {   
        console.log(' '+event.target.value)
        this.filter = {...this.filter ,"searchkey":event.target.value};
        this.sendDatatoCarList();
    }

    handleMaxPricechange(event)
    {
        console.log(' '+event.target.value);
        this.filter = {...this.filter,"maxvalue":event.target.value};  
        this.sendDatatoCarList(); 
    }

    handleCheckbox(event)
    {
        if(!this.filter.categories)
        {
            const categories = this.categoryPicklist.data.values.map(item=>item.value)
            console.log(categories);
            const makeType = this.MakePicklist.data.values.map(item=>item.value)
            console.log(makeType);
            this.filter = {...this.filter, categories, makeType}
            console.log(this.filter)
        }
        const {name,value} = event.target.dataset;
        console.log("name ",name);
        console.log("value",value);

        if(event.target.checked){
            if(!this.filter[name].includes(value)){
                this.filter[name] = [...this.filter[name], value]
            }
        } else {
            this.filter[name] =  this.filter[name].filter(item=>item !==value)
        }
        this.sendDatatoCarList();
    }

    sendDatatoCarList()
    {
        window.clearTimeout(this.timer);
        this.timer = window.setTimeout(()=>{
            publish(this.messageContext,CARS_FILTERED_MESSAGE,{
                filters : this.filter
            })
        },400)
    }
}