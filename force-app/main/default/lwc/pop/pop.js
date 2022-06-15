import { LightningElement,track } from 'lwc';

export default class Pop extends LightningElement {
     //Boolean tracked variable to indicate if modal is open or not default value is false as modal is closed when page is loaded 
     @track isModalOpen = false;
     openModal() {
         this.isModalOpen = true;
     }
     closeModal() {
         this.isModalOpen = false;
     }
     submitDetails() {
         this.isModalOpen = false;
     }
}