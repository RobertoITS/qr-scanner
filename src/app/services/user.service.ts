import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, catchError, tap, throwError } from 'rxjs';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // TODO: Guardar la url en enviroment
  url: string = 'http://localhost:3000/api/'

  // para tener datos frescos creamos una instancia de Subject
  private _refresh$ = new Subject<void>()
  
  constructor(private http: HttpClient) { }

  //! Metodo para manejar bad requests
  handleError(error: HttpErrorResponse) {
    return throwError(() => error)
  }
  
  //! Obtener todos los usuarios
  getUsers(): Observable<any> {
    let direction: string = this.url + 'users'
    return this.http.get<any>(direction).pipe(catchError(this.handleError))
  }

  //! Buscar Usuario por parametro
  searchOneByParameters(value: string): Observable<any> {
    let direction = this.url + 'users/parameters/' + value
    return this.http.get(direction).pipe(catchError(this.handleError))
  }

  //! Obtener un unico usuario
  getUser(id: string): Observable<any> {
    let direction = this.url + 'users/' + id
    return this.http.get(direction).pipe(catchError(this.handleError))
  }

  //! Chequear si el nombre de usuario ya existe
  checkUserName(username: string): Observable<any> {
    let direction = this.url + 'users/available-user-name/' + username
    return this.http.get<any>(direction).pipe(catchError(this.handleError))
  }
  
  //! Chequear Cuil
  checkCuil(cuil: string): Observable<any> {
    let direction = this.url + 'users/available-cuil/' + cuil
    return this.http.get<any>(direction).pipe(catchError(this.handleError))
  }

  //! Registrar Nuevo Usuario
  register(object: any): Observable<any> {
    let direction = this.url + 'users'
    return this.http.post<any>(direction, object).pipe(catchError(this.handleError), tap(() => { this._refresh$.next() }))
  }

  //! Put one
  putUser(object: any, id: string): Observable<any> {
    let direction = this.url + 'users/' + id
    return this.http.put(direction, object).pipe(catchError(this.handleError), tap(() => { this._refresh$.next() }))
  }

  //! Delete one
  deleteOne(id: string): Observable<any>{
    let direction = this.url + 'users/' + id
    return this.http.delete<any>(direction).pipe(catchError(this.handleError), tap(() => { this._refresh$.next() }))
  }

  //! Get teachers
  getTeachers(): Observable<any> {
    let direction = this.url + 'teachers/'
    return this.http.get<any>(direction).pipe(catchError(this.handleError))
  }

}
