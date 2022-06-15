import { LightningElement } from 'lwc';

export default class ModelComponent extends LightningElement {
    OpenPopModel = false;
    SecondPopModel = false;
    HandlePopUpModel(event)
    {
        this.OpenPopModel = true;
    }
    HandlePopClose(event)
    {
        this.OpenPopModel = false;
    }

    HandleSecondPopUpModel(event)
    {
        this.SecondPopModel = true;
    }
    HandleSecondPopClose(event)
    {
        this.SecondPopModel = false;
    }
}