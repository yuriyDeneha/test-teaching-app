import { ApiService } from './../services/api.service';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-univercity',
  standalone: true,
  imports: [
    NgIf,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule, MatSelectModule, MatFormFieldModule
  ],
  templateUrl: './create-univercity.component.html',
  styleUrl: './create-univercity.component.scss'
})
export class CreateUnivercityComponent {
  universityForm!: FormGroup;
  routeId: string;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder,
    private apiService: ApiService
  ) {
    this.activeRoute.params.subscribe((params: { id: string }) => {
      this.routeId = params.id;
      if (params.id) {
        this.getUnivercity(+params.id);
      }
    });
  }

  getUnivercity(id: number) {
    this.apiService.getUnivercity(id).subscribe((university) => {
      this.universityForm.patchValue(university);
      // console.log(university);
    });
  }

  openListPage() {
    this.router.navigate(['/universities/list']);
  }

  ngOnInit(): void {
    this.universityForm = this.fb.group({
      id: [null, [Validators.required]],
      name: ['', [Validators.required, Validators.maxLength(255)]],
      alphaTwoCode: ['', [Validators.required, Validators.maxLength(2)]],
      domains: [[], [Validators.required]],
      stateProvince: [null],
      country: ['', [Validators.required]],
      webPages: [[], [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.universityForm.valid) {

      if (this.routeId) {
        this.apiService.updateUnivercity(+this.routeId, this.universityForm.value).subscribe(() => {
          this.openListPage();
        });
        return;
      } else {
        this.apiService.createUnivercity(this.universityForm.value).subscribe(() => {
          this.openListPage();
        });
      }

    } else {
      alert('Please fill in all required fields.');
    }
  }
}
