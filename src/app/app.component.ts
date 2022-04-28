import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  randomSentence = '';
  enteredText = '';
  makeRandomSentence() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
    for (var i = 0; i < 15; i++){

      if (i === 5 || i === 10) {
        text += "\xa0" ;
      }
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    }
    return text;
  }

  
  constructor() {
    this.randomSentence = this.makeRandomSentence();
    // console.log(this.makeRandomSentence())
  }
  
  onInput(value: string) {
    this.enteredText = value;
    // console.log(value);
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect'
  }
}
