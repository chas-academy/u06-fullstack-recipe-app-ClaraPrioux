import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const auth: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  const isLoggedIn = auth.getLoginStatus();
  if (!isLoggedIn) {
    router.navigate(['/login']);
  }

  return isLoggedIn;
};