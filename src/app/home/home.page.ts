import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router,
    public platform: Platform 
  ) {}

  ngOnInit(): void {
      // if(this.platform.is("mobile")){
      //   this.router.navigateByUrl("login")
      // }
  }

}
