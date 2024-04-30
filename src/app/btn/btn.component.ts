import { Component } from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
  counter = 0;
  mainIcon = faQuestion;

  incrementCounter() {
    this.counter++;

    setTimeout(() => {
      this.mainIcon = fas[Object.entries(fas)[this.funcRandom()][0]]
      this.counter--;
    }, 3000)
  }

  funcRandom() {
    return Math.floor(Math.random() * 1002);
  }

}
