import { Component, Input } from '@angular/core';
import { ListItemComponent } from './list-item/list-item.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-how-get-card',
    templateUrl: './how-get-card.component.html',
    styleUrls: ['./how-get-card.component.scss'],
    standalone: true,
    imports: [NgFor, ListItemComponent]
})
export class HowGetCardComponent {

  @Input() config: any;

}
