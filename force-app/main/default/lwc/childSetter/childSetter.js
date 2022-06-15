import { LightningElement,api } from 'lwc';

export default class ChildSetter extends LightningElement {
    studentdetails;
    @api 
    get student()
    {
        return this.studentdetails;
    }
    set student(data)
    {
        let newage = data.Age*2; 
        this.studentdetails = {...data, Age : newage};
    }
}