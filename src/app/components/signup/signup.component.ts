import { Component } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormControl,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private apiService: ApiService) {}

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
    this.form.setValue({
      name: '',
      username: '',
      password: '',
    });
  }

  get name() {
    return this.form.get('name');
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  onSubmit() {
    this.apiService.postSignUp(this.form.value).subscribe();
  }

  data!: any;
  getTest() {
    this.apiService.getUsers().subscribe({
      next: (data) => {
        this.data = data;
        console.log('Dados obtidos:', this.data);
      },
    });
  }
}
