import { Component, OnInit } from '@angular/core';
import { JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // question: string;
  // catogory: string;
  // value: number;
  // answer: string;

  questionInfo;
  selectedClick;

  constructor(private jeopardyService: JeopardyService){}

  getDataFromService(){
    this.jeopardyService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
        }
      )
  }

  ngOnInit(){
    this.getDataFromService()
  }
//  compareAnswer(){

//  }
 onClickMe(){
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


