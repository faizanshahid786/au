import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../../interfaces/IUser';
import { AuthUser } from '../../services/authUser';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {}

  loginForm = this.fb.group({
    email: [
      '',
      [Validators.maxLength(50), Validators.email, Validators.required],
    ],
    password: ['', [Validators.maxLength(50), Validators.required]],
  });

  ngOnInit(): void {}

  login(): void {
    if (this.loginForm.valid) {
      let form = this.loginForm.value;
      this.loginService
        .loginUser(form.email, form.password)
        .subscribe((res: IUser[]) => {
          if (res.length) {
            AuthUser.user = res[0];
            this.router.navigate(['/dashboard']);
          } else {
            alert('User Login Failed');
          }
        });
    }
  }
}
