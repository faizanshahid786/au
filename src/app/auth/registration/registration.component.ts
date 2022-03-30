import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../../interfaces/IUser';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  rules = [Validators.maxLength(50), Validators.required];
  registerForm = this.fb.group({
    name1: ['', this.rules],
    email1: [
      '',
      [Validators.maxLength(50), Validators.email, Validators.required],
    ],
    password: ['', this.rules],
    cpassword: ['', this.rules],
  });

  constructor(
    private registerService: RegisterService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}

  resgiterUser() {
    if (!this.registerForm.valid) return;

    let form = this.registerForm.value;

    if (form.password != form.cpassword) {
      alert("Password and Confirm Password doesn't match");
      return;
    }
    let data: IUser = {
      id: 0,
      name: form.name1,
      email: form.email1,
      password: form.password,
    };

    this.registerService.regsiteredUser(data).subscribe((res: IUser) => {
      if (!res.id) return alert('User Registered Failed');

      alert('User Registered Successfully');
      this.registerForm.reset();
      this.router.navigate(['/login']);
    });
  }
}
