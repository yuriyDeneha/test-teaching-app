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


  constructor() {


    const people = [
      { firstName: 'Anna', lastName: 'Smith', age: 17 },
      { firstName: 'Oleg', lastName: 'Ivanov', age: 22 },
      { firstName: 'Maria', lastName: 'Petrova', age: 19 },
    ];


    console.log(this.result1(people));
    console.log(this.result2(people));
    console.log(this.result3(people));
    console.log(this.result4(people));
    console.log(this.result5(people));
  }

  result1(people) {
    return people
      .filter((person) => person.age >= 18)
      .map((person) => {
        return {
          fullName: `${person.firstName} ${person.lastName}`,
          isAdult: person.age > 18
        }
      });
  }

  result2(people) {
    const adultPeople = people
      .filter((person) => person.age >= 18);

    const mappedPeople = adultPeople.map((person) => {
      return {
        fullName: `${person.firstName} ${person.lastName}`,
        isAdult: person.age > 18
      }
    });

    return mappedPeople;
  }

  result3(people) {

    const ADULT_AGE = 18;

    const adultPeople = people
      .filter((person) => person.age >= ADULT_AGE);

    const mappedPeople = adultPeople.map((person) => {
      return {
        fullName: `${person.firstName} ${person.lastName}`,
        isAdult: true
      }
    });

    return mappedPeople;
  }

  result4(people) {

    const ADULT_AGE = 18;

    const isUserAdult = (person) => person.age >= ADULT_AGE;

    const adultPeople = people
      .filter(isUserAdult);

    const mapAdult = (person) => {
      return {
        fullName: `${person.firstName} ${person.lastName}`,
        isAdult: true
      }
    }
    const mappedPeople = adultPeople.map(mapAdult);

    return mappedPeople;
  }

  result5(people) {

    const ADULT_AGE = 18;

    function isUserAdult(person) {
      return person.age >= ADULT_AGE;
    };

    const adultPeople = people
      .filter(isUserAdult);

    const mapAdult = (person) => {
      return {
        fullName: `${person.firstName} ${person.lastName}`,
        isAdult: true
      }
    }
    const mappedPeople = adultPeople.map(mapAdult);

    return mappedPeople;
  }



  filterLength4(words: string[]) {
    words = words
      .filter(
        (item: string) => item.length > 4
      );

    return words;
  }

  createObject(words: string[]) {
    return words.map((word: string) => {
      return {
        name: word,
      }
    });
  }

  replateQuadrat(numbers: number[]) {
    const replacedNumbers = [];

    numbers.forEach((num: number) => {
      const newNum = num * num;
      replacedNumbers.push(newNum);
    });

    return replacedNumbers;
  }

  suma(numbers: number[]) {
    let suma = 0;
    numbers.forEach((num: number) => {
      suma += num;
    });

    return suma;
  }

  filterEvenNumbers(arr: number[]) {
    arr = arr
      .filter(
        (num: number) => num % 2 === 0
      );

    return arr;
  }

  changeX2(arr: number[]) {
    return arr.map((num: number) => num * 2);
  }

  oddAndX3(arr: number[]) {
    return arr
      .filter((num: number) => num % 2 !== 0)
      .map((num: number) => num * 3);
  }

  capitalize(arr: string[]) {
    return arr.map((word: string) => {
      return word[0].toLocaleUpperCase() + word.slice(1);
    });
  }

  addPrefix(arr: string[]) {
    return arr.map((word: string) => {
      return 'super-' + word;
    });
  }


  calculateString(symbol: string, str: string) {

    let count = 0;
    const arr = str.split('');

    arr.forEach((arrSym) => {
      if (arrSym === symbol) {
        count++;
      }
    })

    return count;
  }


  workString() {
    const str = 'Hello world, how is going?';

    console.log('DATA: ', str)
    console.log('length: ', str.length)
    console.log('includes: ', str.includes('world'))
    console.log('Words split " ": ', str.split(' '))
    console.log('Words split "o": ', str.split('o'))
    const words = str.split(' ');
    console.log('Wordss by coma " ": ', words.join('|'))
    const email = '   yuriy.deneha@gmail.com       '
    console.log('Email before:', email.length);
    console.log('Email:', email.trim());
    console.log('Email before:', email.trim().length);
    console.log('Email before:', email.trim().length);

    const wordsLines = words.join('|');
    console.log('Wordss by coma " ": ', wordsLines.replaceAll('|', ','))


    let dateString = new Date().toLocaleString();
    dateString = dateString.slice(12, 20)
    console.log(dateString);
  }


  workArray() {
    let arr: any = [1, 2, 3];
    console.log(arr);
    // console.log('Before: ', arr[0]);
    // console.log('After: ', arr[0]);

    arr.push(4);
    arr.push(5);
    console.log('After push: ', arr);

    // arr = arr.slice(0, 5);

    arr = arr.filter((item) => item === 0);

    // console.log('After filter: ', arr);

    arr = arr.map((item, index) => item * 2);
    // arr = arr.filter((item, index) => item > 5);
    console.log('After map: ', arr);

    let suma = 0;
    arr.forEach(element => {
      suma = suma + element
    });
    console.log('After forEach: ', suma);
  }
}
