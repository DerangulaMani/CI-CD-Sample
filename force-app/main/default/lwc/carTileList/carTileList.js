import { LightningElement,wire } from 'lwc';
import GetCarData from '@salesforce/apex/CarController.getCars';
import {subscribe,MessageContext} from 'lightning/messageService';
import CARS_FILTERED_MESSAGE from '@salesforce/messageChannel/CarsFiltered__c';
export default class CarTileList extends LightningElement {
    cars
    error
    filters = {}
    carFilterSubscription
    /*Load The Context For LMS*/
    @wire(MessageContext)
    messageContext;
    
    @wire(GetCarData,{filters : '$filters'})
    getcardata({data,error})
    {
        if(data)
        {
            console.log(data);
            this.cars = data;
        }
        if(error)
        {
            console.log(error);
            this.error = error;
        }
    }

    connectedCallback()
    {
        this.subscribeHandler();
    }

    subscribeHandler()
    {
        this.carFilterSubscription = subscribe(this.messageContext,CARS_FILTERED_MESSAGE,(message)=>this.HandleFilterchange(message))
    }

    HandleFilterchange(message)
    {
        console.log(message.filters) ;     
        this.filters = {...message.filters}
    }
}