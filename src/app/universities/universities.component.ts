import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { Component, inject, OnInit } from '@angular/core';
import { UnivercitiesService } from '../services/univercities.service';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-universities',
  standalone: true,
  providers: [UnivercitiesService],
  imports: [
    CommonModule, FormsModule, MatButtonModule,
    MatSnackBarModule,
    MatInputModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.scss']
})
export class UniversitiesComponent implements OnInit {

  private _snackBar = inject(MatSnackBar)

  univercities: {
    name: string,
    web_pages: string[]
  }[] = [];

  country: string = 'poland';

  countries: { value: string, display: string }[] = [
    { value: 'ukraine', display: 'Ukraine' },
    { value: 'poland', display: 'Poland' },
    { value: 'india', display: 'India' },
    { value: 'United States', display: 'USA' }
  ];

  constructor(private univercitiesService: UnivercitiesService) { }

  ngOnInit() {
    this.getUnivercities();
  }

  getUnivercities() {
    this.univercitiesService.getUnivercitiesByCountry(this.country)
      .subscribe((data: any) => {
        console.log(data);

        if (data.length === 0) {
          this._snackBar.open('No universities found', 'Close', {
            duration: 2000,
          });
        } else {
          this._snackBar.open('Universities found: ' + data.length, 'Close', {
            duration: 2000,
          });
        }
        this.univercities = data;
      });
  }

}
