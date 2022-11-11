import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = '';
  password = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.authService.autenticar(this.user, this.password).subscribe(
      () => {
        this.router.navigate([''])
      },
      (error) => {
        alert('Usuário ou senha inválidos');
        console.log(error);
      }
    );
  }
}
