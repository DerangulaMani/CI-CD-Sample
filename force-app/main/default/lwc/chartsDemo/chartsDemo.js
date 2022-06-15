import { LightningElement, wire,track } from 'lwc';
import CovidData from '@salesforce/apex/Covid.retriveData';
export default class ChartsDemo extends LightningElement {
    data = {}
    EachObj = []
    Manychild
    value = ''
    @wire(CovidData)
    CovidDatails({data, error}){
        if(data){
             console.log(data);
             this.EachObj = data;
        }
        if(error){
            console.error(error)
        }}
    AllStates = []
    get options(){
        this.AllStates = this.EachObj.map(item=>{
            return { label: item.state, value: item.state}});
        return this.AllStates;
    }

    handleChange(event) {
        this.value = event.detail.value;
        this.Country(this.value)
    } 

    Country(value)
    {
        this.EachObj.map(item=>{
            if(item.state === value)
            { 
                var Countryvaluesdatas = {positive : item.positive,deaths : item.death,total : item.total}
                this.Manychild = this.template.querySelectorAll('c-charts');
                console.log(' Length : '+this.Manychild.length);
                for(var i=0;i<this.Manychild.length;i++)
                {
                    this.template.querySelectorAll('c-charts')[i].deleteDom(Countryvaluesdatas);
                }
            }  
        })
    }   
}

/*
             let obj = {};
             console.log(EachObj.length);
             EachObj.map((item)=>{
                 obj[item.name] = item.Age;
             })
             console.log(obj);
             console.log(Object.keys(obj));
             console.log(Object.values(obj));
*/