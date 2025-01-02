import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-margin-padding',
    templateUrl: './margin-padding.component.html',
    styleUrls: ['./margin-padding.component.scss'],
    standalone: true,
    imports: [FormsModule, NgIf]
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
