import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

import { map } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

export const canActivateGuard: CanActivateFn = (route, state) => {
  const loginService = inject(AuthService);
  const router = inject(Router);
  const localStorageService = inject(LocalStorageService);
  const token = localStorageService.get('authToken');
  if (!token) {
    router.navigate(['']);
    return false;
  }

  return loginService.isLoggedIn(token).pipe(
    map((data) => {
      return data.valid as boolean;
    })
  );
};
