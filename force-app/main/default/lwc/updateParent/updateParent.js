import { LightningElement,api,track } from 'lwc';

export default class UpdateParent extends LightningElement {

    data = {
        name : 'Mani',
        Age : 23
    }

    listnames = ['Mani','Chandra','Derangula','Chandrahasa'];


    HandleClick(event)
    {
        console.log(event);
        //this.data.name = event.target.value;
        this.data = {...this.data,"name":event.target.value} 
    }
    handleClickHandler()
    {
        var usedqueryselector = this.template.querySelectorAll('.name');
        Array.from(usedqueryselector).forEach(item =>{
            console.log(item.innerText);
        })
    }
}