import { LightningElement } from 'lwc';

export default class NavBarParentComponent extends LightningElement {
    selectedName = null 
    family = [
        {
            name : "Manichandra",
            age  : "23",
        },
        {
            name : "Chandrahasa",
            age : "29"
        },
        {
            name : "Himabindu",
            age  : "26"
        }
    ]
    selectName(event) {
        const playerName = event.detail;
        console.log(' playerName : '+event.detail)
        this.selectedName = this.family.find(
            item => item.name === playerName
            );
    }
    fetchDetailsHandler() {
        const elem = this.template.querySelector('h1');
        elem.style.border = '1px solid black';
    }
}