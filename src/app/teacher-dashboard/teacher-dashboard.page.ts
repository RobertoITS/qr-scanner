import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { User } from '../models/user.interface';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.page.html',
  styleUrls: ['./teacher-dashboard.page.scss'],
})
export class TeacherDashboardPage implements OnInit {

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

  menuItems = [
    {
      title: "Inicio",
      icon: "home-outline",
      path: "/teacher-dashboard/teacher-home"
    },
    {
      title: "Generar QR",
      icon: "qr-code",
      path: "/teacher-dashboard/qr-screen"
    },
    {
      title: "Salir",
      icon: "log-out-outline",
      path: "/login"
    },
  ]

  constructor(
    private storage : StorageService,
    private menuController: MenuController,
    private router: Router 
  ) { }

  ngOnInit() {
    this.storage.getUser('user').then(user => {this.user = user})
    this.router.navigateByUrl('/teacher-dashboard/teacher-home')
  }

  async openMenu() {
    let isOpen: boolean
    this.menuController.isOpen('main').then(value => {
      isOpen = value;
      if(isOpen){

        this.menuController.close('main')
      }
      else {
        this.menuController.open('main')
      }
    })
    
  }

  

}
