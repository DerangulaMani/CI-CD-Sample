import { LightningElement } from 'lwc';

export default class ChildModel extends LightningElement {
    //footerhandle 
    HandleClose(event)
    {
        this.dispatchEvent(new CustomEvent('close'));
    }

    handleSlotFooterChange(event)
    {
       const footerhandle = this.template.querySelector('.slds-modal__footer');
       if(footerhandle) 
       {
          footerhandle.classList.remove('slds-hide');
          console.log(footerhandle.classList);
       }
    }

    handleSlotHeaderChange(event)
    {
        const headerhandle = this.template.querySelector('.slds-modal__header');
        if(headerhandle)
        {
            headerhandle.classList.remove('remove_header');
            console.log(footerhandle.classList);
        }
    }
}