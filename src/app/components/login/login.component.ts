import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  tipoDocumentoField = new FormControl('DNI', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]);
  numeroDocumentoField = new FormControl('45888967', [Validators.required, Validators.minLength(7), Validators.maxLength(8)]);
  passwordField = new FormControl('1111111111', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]);

  constructor() { }

  ngOnInit(): void {
  }

}
