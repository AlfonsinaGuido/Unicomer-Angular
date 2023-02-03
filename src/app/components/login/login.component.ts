import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  tipoDocumentoField = new FormControl('DNI', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern(/^[a-zA-Z ]*$/)]);
  numeroDocumentoField = new FormControl('45888967', [Validators.required, Validators.pattern(/^[0-9]{7,10}$/)]);
  passwordField = new FormControl('Clave@01', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/), Validators.minLength(5), Validators.maxLength(10)]);


  constructor() { }

  ngOnInit(): void {
  }

  get isTipoDocumentoFieldValid() {
    return this.tipoDocumentoField.touched && this.tipoDocumentoField.valid;
  }

  get isTipoDocumentoFieldInvalid() {
    return this.tipoDocumentoField.touched && this.tipoDocumentoField.invalid;
  }

  get isNumeroDocumentoFieldValid() {
    return this.numeroDocumentoField.touched && this.numeroDocumentoField.valid;
  }

  get isNumeroDocumentoFieldInvalid() {
    return this.numeroDocumentoField.touched && this.numeroDocumentoField.invalid;
  }

  get isPasswordFieldValid() {
    return this.passwordField.touched && this.passwordField.valid;
  }

  get isPasswordFieldInvalid() {
    return this.passwordField.touched && this.passwordField.invalid;
  }
  
}
