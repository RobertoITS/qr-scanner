import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput, IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Router } from '@angular/router';
import { Login } from '../models/login.interface';
import { User } from '../models/user.interface';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { StorageService } from '../services/storage.service';

import { Store } from '@ngrx/store';
import { AppState, selectAuthFeature, selectIsLoading } from '../state/app.state';
import { login } from '../state/actions/auth.actions';
import { Observable } from 'rxjs';
import { selectIsLogged } from '../state/app.state';

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

  //? Matias: Variable user sera la que contenga los datos de usuario 
  user: User =  {
    id: 0,
    last_name: "",
    name: "",
    cuil: "",
    dir: "",
    phone_number: "",
    birthdate: "01/01/1990",
    age: 32,
    email: "mail@mail.com",
    user_name: "",
    pass: "",
    role: "",
    file_number: "123"
  }

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;

  // example test
  getState?: Observable<any> 

  loading: boolean = false 

  constructor(
    private api           : AuthService, 
    private router        : Router, 
    private cookieService : CookieService,
    private storage       : StorageService,
    private store         : Store<AppState>
    ) {
      this.store.select(selectIsLoading).subscribe(load => this.loading = load)
     }

  ngOnInit() {
    this.store.select(selectIsLoading).subscribe(load => this.loading = load)
    // this.getState = this.store.select(selectFeaureCredentials)
    console.warn(this.loading)
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
    this.store.dispatch(login({credentials: form}))
    

  

    
    // //! PODEMOS MANEJAR LOS BAD REQUEST!!
    // this.api.login(form).subscribe({
    //   next: data => {

    //     //? Matias: Extraemos el objeto usuario de la respuesta y lo asignamos a variable user 
    //     this.user = data.result[0]
        
    //     //? Matias: guardamos el user object en string en localstorage
    //     this.storage.setObject(this.user, 'user') //? key = 'user' 

    //     //! experimental: Agregar el usuario al estado de la aplicacion 
    //     // this.store.dispatch(loginUser, {})

    //     console.log(data.token)
    //     this.cookieService.set('x-token', data.token) //* Guardamos el token en las cookies
        
    //     // TODO: Matias: CREAR UN SWITCH CASE DEPENDIENDO EL ROL DEL USUARIO
    //     if(this.user.role === "ALUMNO"){
    //       this.router.navigate(['/dashboard'])
    //     }
    //     else {
    //       this.router.navigate(['/teacher-dashboard'])
    //     }
    //   },
    //   error: error => { console.log(error.error.msg) }
    // })
  }

}
