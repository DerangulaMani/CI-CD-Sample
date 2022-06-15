import { LightningElement, wire } from 'lwc';
import GetAccData from '@salesforce/apex/AccDetails.GetAccData'
export default class MapLWC extends LightningElement {
    mapMarkers = [];
    maekersTitle="Account Location"
    selectedMarker;
    @wire(GetAccData)
    AccountData({data,error})
    {
        if(data)
        {
            console.log(data);
            this.mapfunction(data);
        }
        if(error)
        {
            console.log(error);
        }
    }

    mapfunction(data)
    {
        this.mapMarkers = data.map(item => {
            return {
                location:{
                    Street:item.BillingCity || '',
                    City:item.BillingCity ||'',
                    PostalCode: item.BillingPostalCode || '',
                    State: item.BillingState || '',
                    Country: item.BillingCountry || ''
                },
                icon:'utility:salesforce1',
                title:item.Name,
                value:item.Name,
                description:item.description
            }
        })
        this.selectedMarker = this.mapMarkers.length && this.mapMarkers[0].value
    }

    callMarkerHandler(event){
        this.selectedMarker = event.detail.selectedMarkerValue
    }

}