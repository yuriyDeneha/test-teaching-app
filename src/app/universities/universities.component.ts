import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { Component, inject, OnInit } from '@angular/core';
import { UnivercitiesService } from './services/univercities.service';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Univercity } from './models/univercity.model';
import { ApiService } from './services/api.service';

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

  univercities: Univercity[] = [];
  allUnivercities: Univercity[] = [];

  country: string = 'poland';
  query: string = '';

  countries: { value: string, display: string }[] = [
    { value: 'ukraine', display: 'Ukraine' },
    { value: 'poland', display: 'Poland' },
    { value: 'india', display: 'India' },
    { value: 'United States', display: 'USA' }
  ];

  constructor(
    private univercitiesService: UnivercitiesService,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    // this.getUnivercities();
    this.getLocalUnivertisies();
  }

  getLocalUnivertisies() {
    this.apiService.getUnivercitys()
      .subscribe((data: Univercity[]) => {
        console.log(data);
        this.univercities = data;
        this.allUnivercities = [...data];
      });
  }

  deleteUnivercity(id: number) {
    this.apiService.deleteUnivercity(id)
      .subscribe((response) => {
        this.getLocalUnivertisies();
        // this.univercities = this.univercities.filter((item: any) => item.id !== id);
        console.log('Delete univercity: ', response);
      });
  }

  filterByName(query: string) {
    console.log('filterByName: ' + query);
    this.univercities = this.allUnivercities
      .filter(
        (item: any) => item.name.toLowerCase().includes(query.toLowerCase())
      );
  }

  getUnivercities() {
    this.univercitiesService.getUnivercitiesByCountry(this.country)
      .subscribe((data: Univercity[]) => {
        // console.log(data);
        // console.log(data.filter((item: any, index) => index > 0));

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
        this.allUnivercities = [...data];
      });
  }

}
