import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-how-get-card',
  templateUrl: './how-get-card.component.html',
  styleUrls: ['./how-get-card.component.scss']
})
export class HowGetCardComponent {

  @Input() config: any;

}
