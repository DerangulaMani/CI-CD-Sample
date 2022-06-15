import { LightningElement,api } from 'lwc';

export default class HelloWorld extends LightningElement {
    @api country
    percentage = 10
    family = ["Manichandra","Chandrahasa","Himabindu","Ramulu","Gnagadevi"];
    showmodel = false 

    showHeader() {
        this.showmodel = true 
    }
    removeheader (){
        this.showmodel = false    
    }
    fetchDetailsHandler() {
       const elem =  this.template.querySelector('h2')
       elem.style.border = '1px solid black';
       const allnames = this.template.querySelectorAll('.name');
        Array.from(allnames).forEach(element => {
            console.log(element.innerText);
            console.log(element);
            element.setAttribute("title", element.innerText);
        });

        /// LWC Manual DOM
        const creteDOMManual =  this.template.querySelector('.child')
        creteDOMManual.innerHTML = '<p> Hello India.  </p>'
    }
    changeHandler(event)
    {
        this[event.target.name] = event.target.value;
        console.log(event.target);
    }
    handleChildMethod() {
        this.template.querySelector('c-parent-child-string-parse').childMethod();
    }


}