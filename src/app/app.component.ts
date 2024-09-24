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

  config = {
    howToGetCard: {
      title: 'Як одержати картку monobank?',
      steps: [
        {
          stepNumber: 1,
          icon: '1.png',
          title: 'Введіть номер телефону',
          description: 'Введіть номер телефону або встановіть застосунок з ',
          links: [
            { url: 'https://www.apple.com/app-store/', text: 'App Store' },
            { url: 'https://play.google.com/', text: 'Google Play' }
          ]
        },
        {
          stepNumber: 2,
          icon: '2.png',
          title: 'Завантажте документи',
          description: 'Сфотографуйте паспорт та код або завантажте документи через Дію'
        },
        {
          stepNumber: 3,
          icon: '3.png',
          title: 'Отримання картки',
          description: 'Виберіть отримання віртуальної картки або заберіть картку в найближчій точці видачі. Це безкоштовно'
        }
      ]
    },
  };

  calculateAge() {

    const date = new Date(this.birthday);

    const year = date.getFullYear();

    const currentYear = new Date().getFullYear();

    this.age = currentYear - year;
  }
}
