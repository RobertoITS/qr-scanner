import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput, IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Router } from '@angular/router';
import { Login } from '../models/login.interface';
import { QrScannerService } from '../services/qr-scanner.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;
  //* Instanciamos los inputs
  @ViewChild('username') username!: IonInput
  @ViewChild('pass') pass!: IonInput

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;

  constructor(private api: QrScannerService, private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  //! Funcion del LOGIN
  login() {

    let form: Login = {
      username: this.username.value!.toString(),
      pass: this.pass.value!.toString()
    }

    //! PODEMOS MANEJAR LOS BAD REQUEST!!
    this.api.login(form).subscribe({
      next: data => {
        console.log(data.token)
        this.cookieService.set('x-token', data.token) //* Guardamos el token en las cookies
        this.router.navigate(['/dashboard'])
      },
      error: error => { console.log(error.error.msg) }
    })
  }

}
