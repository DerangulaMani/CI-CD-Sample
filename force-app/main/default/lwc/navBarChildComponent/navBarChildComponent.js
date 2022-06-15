import { LightningElement,api } from 'lwc';

export default class NavBarChildComponent extends LightningElement {
     @api family
     handleNavSelection(event) {
        const select = new CustomEvent('selection' , {
            detail : event.target.name  })
            this.dispatchEvent(select);
            console.log(' Name  : '+event.target.name);
            console.log(' Event : '+event);
            console.log(' Event Target : '+event.target);
     }
}