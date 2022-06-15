import { LightningElement } from 'lwc';

export default class DateValidation extends LightningElement {
    startDate
    endDate
    error
    
    dateHandler(event)
    {
        const {name,value} = event.target
        this[name] =value;
        console.log('  Date : '+this[name]);
    }

    submitHandler(){
        if(this.validateDate(this.startDate, this.endDate)){
            console.log( ' Start Date '+this.startDate+' EndDate'+this.endDate);
            console.log("Data is Valid")
        } else{
            this.error = "End Date cannot be greater than Start Date"
        }
    }

    validateDate(startDate, endDate){
        console.log( ' StartDate '+startDate+' End Date'+endDate);
        let dateone = new Date(startDate).getTime() ;
        let datetwo = new Date(endDate).getTime();
        console.log(' dateone '+dateone+' enddate '+datetwo)
        return new Date(startDate).getTime() < new Date(endDate).getTime()
    } 
}