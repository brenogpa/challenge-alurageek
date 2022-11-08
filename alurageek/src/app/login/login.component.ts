import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = '';
  password = '';

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  login() {
    this.authService.autenticar(this.user, this.password).subscribe(
      () => {
        console.log('Autenticado com sucesso');
      },
      (error) => {
        alert('Usuário ou senha invalido');
        console.log(error);
      }
    );
  }
}
