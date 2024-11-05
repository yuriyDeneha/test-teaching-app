import { Component } from '@angular/core';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.scss']
})
export class FormulaComponent {

  a: number = 0;
  b: number = 0;

  get area() {
    return this.a * this.b;
  }
}
