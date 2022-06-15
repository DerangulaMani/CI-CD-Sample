import { LightningElement,wire,api,track } from 'lwc';
import GetContacts from '@salesforce/apex/ContactsData.GetContacts'
export default class Filter extends LightningElement {
    Alldata = [];
    filteredData=[]
    timer
    filterby 
    @api sortby = 'Name'
    @api sortedDirection = 'asc'
    labels = ['Id','Name','Email','Title'];
    @wire(GetContacts)
    hadleValues({data,error})
    {
        if(data)
        {
            console.log(data);
            this.Alldata = data;
            this.filteredData= data
            console.log(this.Alldata);
        }
        if(error)
        {
            console.log(error);
        }
    }

    get FilterByOptions(){
        return [
            {label:"All", value:'All'},
            {label:"Id", value:'Id'},
            {label:'Name', value:'Name'},
            {label:'Title', value:'Title'},
            {label:'Email', value:'Email'}
        ]
    }

    filterbyHandler(event)
    {
        this.filterby = event.target.value;
        console.log(this.filterby);
    }

    filterHandler(event)
    {
        const {value} = event.target;
        window.clearTimeout(this.timer)
        if(value)
        {
            this.timer = window.setTimeout(()=>{
                console.log(value);
                this.filteredData = this.Alldata.filter(item=>{
                if(this.filterby== 'All')
                {
                        return Object.keys(item).some(key=>{
                            return item[key].toLowerCase().includes(value);
                        })
                    
                }
               else{
                    var val =  item[this.filterby] ? item[this.filterby] : '';
                    return val.toLowerCase().includes(value);
               }
            })
            },500)
        }
        else
        {
            this.filteredData = [...this.Alldata];
        }
    }

    sortByHandler(event){
        this.sortby = event.target.value;
        console.log(' sortby '+this.sortby);
        this.filteredData = [...this.sortby(this.filteredData)]
    }
    sortby(data)
    {
        const cloneData = [...data];
        cloneData.sort((a,b)=>{
            if(a[this.sortby]===b[this.sortby])
            {
                return 0;
            }
              return this.sortedDirection === 'desc' ?
                a[this.sortby] > b[this.sortby] ? -1:1 :
                a[this.sortby] < b[this.sortby] ? -1:1
        })
        return cloneData;
    }
}