import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    name;
    value;
    selected = {}
    CorectAns = false;
    myQuestions=[{
            id:"Question1",
            question:"Which one of the following is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"Which of the file is invald in LWC component folder?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"WHich one of the following is not a directive?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }]

        changeHandler(event)
        {
            this.name = event.target.name;
            this.value = event.target.value;
            this.selected={...this.selected, [this.name]:this.value}
            console.log(this.selected);
        }
        CorrecAnswers = 0;

        submitHandler(event)
        {
            event.preventDefault();
            //console.log(this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswer));
            let correct = this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswer);
            this.CorrecAnswers = correct.length;
            this.CorectAns = true;
            console.log(this.CorrecAnswers);
        }
        isSubmit
        get allNotSelected()
        {
            if(Object.keys(this.selected).length === this.myQuestions.length)
            {
                this.isSubmit = true;
            }
            return !(this.isSubmit);
        }

        connectedCallback()
        {
            console.log('Parent Connected CallBack ');
        }
}