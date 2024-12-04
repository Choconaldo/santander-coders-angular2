import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const canActivateGuard: CanActivateFn = (route, state) => {
  const loginService = inject(AuthService);
  const router = inject(Router);

  if (loginService.isLoggedIn()) {
    return true;
  }

  router.navigate(['']);
  return false;
};
