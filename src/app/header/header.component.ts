import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  blocksOpen = [false, false];

  openBlock(block: number) {
    this.blocksOpen[block] = true;
  }

  hideBlock(block: number) {
    this.blocksOpen[block] = false;
  }

}
