


// Задача: Доставка посилки: від відправника до отримувача

// Пошта: відправник, отримувач, пошта, відділення, транспорт 


// Abstraction

// Відправник: ім'я, прізвище, телефон, адреса, поштовий індекс, місто, країна
// Отримувача: ім'я, прізвище, телефон, адреса, поштовий індекс, місто, країна
// Пошта: відділення, транспорт, персонал
// Посилка: вага, розмір, вартість, відправник, отримувач, пошта
// Відділення: адреса, поштовий індекс, місто, країна
// Транспорт: марка, модель, рік випуску, колір

//

export class Person {
  name: string;
  surname: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;

  posylka: Posylka;

  constructor(name: string, posylka?: Posylka) {
    this.name = name;
    this.posylka = posylka;
  }

  goToPostViddilenya(viddilenya: Viddilenya) {
    console.log('Go to post office', this.name, 'to', viddilenya.address);
  }

  confirmPackage() {
    console.log('Confirm package', this.posylka.cost, 'paid');
  }
}

export class Posylka {
  weight: number;
  size: number;
  cost: string;

  constructor(cost: string) {
    this.cost = cost;
  }

  setParams(weight: number, size: number) {
    this.weight = weight;
    this.size = size;
  }
}

export class Post {
  viddilenya: Viddilenya;
  transport: Transport;

  posylka: Posylka;

  constructor(viddilenya: Viddilenya, transport: Transport) {
    this.viddilenya = viddilenya;
    this.transport = transport;
  }

  deliverPackage(from: Person, to: Person) {

    console.log('Deliver package from', from.name, 'to', to.name);
    this.posylka = from.posylka;
    this.posylka.setParams(10, 20);
    this.transport.deliver(to, this.posylka);
  }
}

export class Viddilenya {
  address: string;
  postalCode: string;
  city: string;
  country: string;

  constructor(adress?: string, postalCode?: string, city?: string, country?: string) {
    this.address = adress;
    this.postalCode = postalCode;
    this.city = city;
    this.country = country;
  }
}

export class Transport {
  brand: string;
  model: string;
  year: number;
  color: string;

  deliver(to: Person, posylka: Posylka) {
    console.log('Deliver package to', to.name);
    to.posylka = posylka;
  }
}
