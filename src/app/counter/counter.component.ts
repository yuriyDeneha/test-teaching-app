import { Component } from '@angular/core';
import { NgIf, DatePipe } from '@angular/common';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css'],
    standalone: true,
    imports: [NgIf, DatePipe]
})
export class CounterComponent {

  counter = 1; // number: 0, 1, 2, 3, ...
  buttonText = 'Next day'; // string: text 'c', 'Click me'
  answer = false; // boolean: true or false

  date = new Date(); // class: method

  toggleAnswer() {
    this.answer = !this.answer;
  }

  incrementCounter() {
    this.counter = this.counter + 1;
  }

  decrementCounter() {
    this.counter = this.counter - 1;
  }

  nextDay() {
    const newDate = this.date.getDate() + 1;
    this.date = new Date(this.date.setDate(newDate));
  }
}
