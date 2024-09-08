import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fuel-website';

  age: number = 25;
  birthday = new Date(1996, 5, 4);

  calculateAge() {

    const date = new Date(this.birthday);

    const year = date.getFullYear();

    const currentYear = new Date().getFullYear();

    this.age = currentYear - year;
  }
}
