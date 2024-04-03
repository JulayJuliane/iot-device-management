// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ErrorMessageService } from '../services/error-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router, private errorMessageService: ErrorMessageService) { }

  login() {
    this.authService.login({ username: this.username, password: this.password })
      .subscribe(
        response => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/']);
        },
        error => {
          this.errorMessageService.showErrorMessage('Credenciais inválidas. Por favor, tente novamente.');
        }
      );
  }
}
