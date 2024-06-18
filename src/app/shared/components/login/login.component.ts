import {Component, inject} from '@angular/core';
import {Auth, GoogleAuthProvider, signInWithPopup} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private auth = inject(Auth);

  async login() {
    return await signInWithPopup(this.auth, new GoogleAuthProvider());
  }


}
