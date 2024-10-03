import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderHoverBlockComponent } from '../header-hover-block/header-hover-block.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [RouterModule, HeaderHoverBlockComponent],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  blocksOpen = [false, false];

  constructor(private router: Router) { }

  openBlock(block: number) {
    this.blocksOpen[block] = true;
  }

  hideBlock(block: number) {
    this.blocksOpen[block] = false;
  }

  openMaterialPage() {
    this.router.navigate(['/material']);
  }
}
