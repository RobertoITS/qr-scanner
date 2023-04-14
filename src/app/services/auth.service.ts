import { Injectable } from '@angular/core';
import { Login } from '../models/login.interface';
import { Observable, Subject, of, map, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { User } from '../models/user.interface';


//* Creamos el servicio para correr nuestra API-REST
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // TODO: Guardar la url en enviroment
  url: string = 'http://localhost:3000/api/'

  // para tener datos frescos creamos una instancia de Subject
  private _refresh$ = new Subject<void>()

  constructor(private http: HttpClient) { }

  //! Metodo para manejar bad requests
  handleError(error: HttpErrorResponse) {
    return throwError(() => error)
  }

  //! Metodo Login
  login(form: Login): Observable<any> {
    let direction: string = this.url + 'auth/login'
    return this.http.post<User>(direction, form)
    .pipe(
      catchError(this.handleError))
  }


  
}
