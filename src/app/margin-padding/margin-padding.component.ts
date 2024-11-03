import { Component } from '@angular/core';

@Component({
  selector: 'app-margin-padding',
  templateUrl: './margin-padding.component.html',
  styleUrls: ['./margin-padding.component.scss']
})
export class MarginPaddingComponent {

  person = {
    firstName: '',
    sureName: '',
    age: '',
    avatar: '',
    aboutYourself: '',
  }
}
