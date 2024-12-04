import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { canActivateGuard } from './guards/can-activate.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  {
    path: 'users-list',
    component: UsersListComponent,
    canActivate: [canActivateGuard],
  },
];
