import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.page.html',
  styleUrls: ['./teacher-home.page.scss'],
})
export class TeacherHomePage implements OnInit {

  mySubjects = [
    {
      title: 'Laboratorio 1',
      carrer: 'TSDS',
      curso: 'Primer Año',
      icon: '../../assets/images/tubes.png',
      color: 'custom',
    },
    {
      title: 'Laboratorio 2',
      carrer: 'TSDS',
      curso: 'Segundo Año',
      icon: '../../assets/images/tubes.png',
      color: 'tertiary',
    },
    {
      title: 'Programacion 1',
      carrer: 'TSDS',
      curso: 'Primer Año',
      icon: '../../assets/images/code.png',
      color: 'custom',
    },
    {
      title: 'Programacion 2',
      carrer: 'TSDS',
      curso: 'Segundo Año',
      icon: '../../assets/images/code.png',
      color: 'tertiary',
    },
  ]

  myActivity = [
    {
      date: '10/04/2023',
      subject: 'Programacion 2'
    },
    {
      date: '09/04/2023',
      subject: 'Programacion 1'
    },
    {
      date: '08/04/2023',
      subject: 'Programacion 2'
    },
  ]

  constructor() { }

  slidesOptions = {
    slidesPerView: 1.3,
  }

  ngOnInit() {
  }

}
