import { Component } from '@angular/core';
import { Person, Post, Posylka, Transport, Viddilenya } from './post.model';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.scss']
})
export class FormulaComponent {

  a: number = 20;
  b: number = 100;
  area: number = 0;
  diagonal: number = 0;
  deg: number = 0;

  constructor() {
    this.post();
  }

  post() {
    const posylka = new Posylka('100uah');

    const from = new Person('Anton', posylka);
    const to = new Person('Ivan',);

    const viddilenya = new Viddilenya('Lviv shevchenka 10', '79000', 'Lviv', 'Ukraine');
    const transport = new Transport();

    const post = new Post(viddilenya, transport);

    this.runTask(from, to, post);
  }

  runTask(from, to, post) {
    from.goToPostViddilenya(post.viddilenya);
    post.deliverPackage(from, to);

    to.goToPostViddilenya(post.viddilenya);
    to.confirmPackage();
  }

  calculateArea() {
    this.area = this.a * this.b;
    this.diagonal = Math.round(Math.sqrt(this.a * this.a + this.b * this.b));


    // Calculate the angle in radians
    const angleInRadians = Math.acos(this.b / this.diagonal);

    // Convert the angle to degrees
    this.deg = angleInRadians * (180 / Math.PI) * -1;
    console.log(this.deg);
  }

}
