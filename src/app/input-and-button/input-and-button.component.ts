import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { JeopardyService } from '../jeopardy.service';

@Component({
  selector: 'app-input-and-button',
  templateUrl: './input-and-button.component.html',
  styleUrls: ['./input-and-button.component.css']
})
export class InputAndButtonComponent implements OnInit {
  @Input() questionInfo; 
  @Output() nextQuestion = new EventEmitter<boolean>();
  answer: string;
  // questionInfo;
  score: number = 0;
  // selectedThing: object;

  constructor(private jeopardyService: JeopardyService){}

  ngOnInit() {

  }

  getQuestion() {
    this.nextQuestion.emit(true);
    console.log("this button was clicked")
  }
  // clickedThing(thingIClicked) {
  //   this.selectedThing = thingIClicked;
  //   this.thingSelected.emit(this.selectedThing);
  //   console.log("this button was clicked")
  // }
  submitAnswer(){
    //   function myFunction() {
    //     var x = document.getElementById('myDIV');
    //     if (x.style.display === 'none') {
    //         x.style.display = 'block';
    //     } else {
    //         x.style.display = 'none';
    //     }
    // }
    
       if(this.answer ==this.questionInfo.answer){
         console.log(this.answer)
       this.score = this.score + this.questionInfo.value;
       }  
     }
}
