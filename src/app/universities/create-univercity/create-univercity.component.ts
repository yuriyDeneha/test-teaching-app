import { ApiService } from './../services/api.service';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private apiService: ApiService
  ) { }

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
      this.apiService.createUnivercity(this.universityForm.value).subscribe(() => {
        this.openListPage();
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
