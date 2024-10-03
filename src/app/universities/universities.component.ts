import { Component, OnInit } from '@angular/core';
import { UnivercitiesService } from '../services/univercities.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-universities',
  standalone: true,
  providers: [UnivercitiesService],
  imports: [CommonModule],
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.scss']
})
export class UniversitiesComponent implements OnInit {


  univercities: {
    name: string,
    web_pages: string[]
  }[] = [];

  constructor(private univercitiesService: UnivercitiesService) { }

  ngOnInit() {
    this.univercitiesService.getUnivercities()
      .subscribe((data: any) => {
        console.log(data);

        this.univercities = data;
      });
  }

}
