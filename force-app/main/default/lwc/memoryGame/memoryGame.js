import { LightningElement } from 'lwc';
import {loadStyle} from 'lightning/platformResourceLoader'
import fontawesome from '@salesforce/resourceUrl/fontawesome'
export default class MemoryGame extends LightningElement {
    isLoaded = false;
    renderedCallback()
    {
        if(this.isLoaded)
        {
            return;
        }
        else{
            loadStyle(this,fontawesome+'/fontawesome/css/font-awesome.min.css').then(()=>{
                console.log("SuccessFully Loaded");
            }).catch(error => {
                console.error(error);
            })
            this.isLoaded = true;
        }
    }
}