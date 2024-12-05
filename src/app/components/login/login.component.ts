import { RouterLink, Router } from '@angular/router';
import { Component } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
    this.form.setValue({
      username: '',
      password: '',
    });
  }
  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  showSuccess() {
    this.toastr.success('Logado com sucesso!');
  }

  onSubmit() {
    this.authService
      .login(this.form.value.username, this.form.value.password)
      .subscribe({
        next: () => {
          this.form.setValue({
            username: '',
            password: '',
          });
          this.showSuccess();
          this.router.navigate(['/users-list']);
        },
      });
  }
}
