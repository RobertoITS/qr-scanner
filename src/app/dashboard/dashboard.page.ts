import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.interface';
import { Subject } from '../models/subject.interface';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  token!: string
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

  subjects: Subject[] = [
    { 
      id: 1,
      title: "Laboratorio 1",
      total_hours: 150,
      img: "../../assets/images/tubes.png"
    },
    { 
      id: 2,
      title: "Ingles 1",
      total_hours: 150,
      img: "../../assets/images/language.png"
    },
    { 
      id: 3,
      title: "Programacion 1",
      total_hours: 150,
      img: "../../assets/images/code.png"
    },
    { 
      id: 4,
      title: "Matematica",
      total_hours: 150,
      img: "../../assets/images/maths.png"
    }
  ]

  recentActivity = [
    {
    subj: "Matematica",
    time: "01:32"
    },
    {
      subj: "Laboratorio 1",
      time: "02:32"
    },
    {
      subj: "Ingles 1",
      time: "00:32"
    },
    // {
    //   subj: "Base de Datos",
    //   time: "01:52"
    // },
  ]



  constructor(
    private api     : AuthService,
    private storage : StorageService, 
    private router  : Router
    ) { }

  ngOnInit() {
    // this.getUser
    this.storage.getUser('user').then(user => {this.user = user})
  }

  slidesOptions = {
    slidesPerView: 1.3,
  }

  // //* Obtenemos los datos y manejamos los errores
  // getUser() {
  //   this.api.getUsers().subscribe({
  //     next: data => { console.log(data) },
  //     error: err => { console.log(err.error.msg, err.statusText, err.ok) }
  //   })
  // }

}
