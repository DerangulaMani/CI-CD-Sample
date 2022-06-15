import { LightningElement, track } from 'lwc';

export default class ONeWayDatabinding extends LightningElement {
    name = "Manichandra";
    age = 23;

    ChangeHandler(event)
    {
        this.age = event.target.value;
    }

    // object
    student = {
        fullname:'Manichandra',
        country : 'India',
        state : 'ap'
    }
    Handletrackproperty(event)
    {
       //this.student.fullname = event.target.value;
       //this.student = {...student,"fullname" : event.target.value};
       // WithOut Track Operator.
        this.student = {...student,"fullname" : event.target.value};
    }
    StudentNames = ['Mani','Chandra','Anuskha','Pallavi'];
    handleClick(event){
        console.log('Hello');
        const element = this.template.querySelectorAll('.query');
        // console.log(element.innerText);
        Array.from(element).forEach(item => {
            console.log(item.innerText);
            item.setAttribute("title",item.innerText);
        });
        const con = this.template.querySelector('.child');
        con.innerHtml = '<p> Hii Mani </p>';
    }
 
    data = ['hello','world'];
    get adddata(){
         return this.data[0];
    }
}