import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JeopardyService } from '../jeopardy.service';

@Component({
  selector: 'app-input-and-button', 
  templateUrl: './input-and-button.component.html',
  styleUrls: ['./input-and-button.component.css']
})
export class InputAndButtonComponent implements OnInit {
  //accept the questionInfo object from the parent component
  @Input() questionInfo; 
  //instantiate a new buttonClick event object to throw(emit) an output event to parent component;
  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();

  //create a two-way data binding ngModal variable to track the current answer from the input field
  myAnswer: string;

  //create a two-way data binding ngModal variable to track the current score 
  myScore:number = 0;

  constructor() {}
  
    ngOnInit() {
  
    }

  //method to compare jeopardy answers, if correct then update score
  submitAnswer() {
    
      if(this.myAnswer == this.questionInfo.answer) {
        this.myScore = this.myScore + this.questionInfo.value;
      }
      this.myAnswer = "";
      //if you only have one button for submit/pulling one question, use this line
      // this.buttonClick.emit();
  }
  
  //method to emit event up to parent component and grab new question
  clickedThing() {
    this.buttonClick.emit();
  }

  
 
}


