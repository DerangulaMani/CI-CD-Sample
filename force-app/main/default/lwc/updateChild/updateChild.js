import { LightningElement,api,track } from 'lwc';

export default class UpdateChild extends LightningElement {
	handlefooter()
	{
		const footerElement = this.template.querySelector('.slds-card__footer');
		console.log(footerElement);
		footerElement.classList.remove('slds-hide');
		console.log(footerElement.classList);
	}
}