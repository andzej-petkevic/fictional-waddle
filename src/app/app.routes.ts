import {Routes} from '@angular/router';
import {HomeComponent} from './shared/components/home/home.component';
import {LoginComponent} from './shared/components/login/login.component';
import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['/']);

export const routes: Routes = [
  {path: "", component: HomeComponent, ...canActivate(redirectUnauthorizedToLogin)},
  {path: "login", component: LoginComponent, ...canActivate(redirectLoggedInToHome)}
];
