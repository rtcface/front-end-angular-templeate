import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { AddComponent } from '../../../users/pages/add/add.component';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[]=[];

  constructor() { }

 

  ngOnInit(): void {
    this.items = [
      {
        label:"Home",
        icon:"pi pi-fw pi-home",
        routerLink:['/home']
      },
      {
        label:"About",
        icon:"pi pi-fw pi-info-circle",
        routerLink:['/add']
      },
      {
        label:"Contact",
        icon:"pi pi-fw pi-phone",
        routerLink:['/contact']
      },
      {
        label:"Login",
        icon:"pi pi-fw pi-user",
        routerLink:['/login']
      },
      {
        label:"Register",
        icon:"pi pi-fw pi-user-plus",
        routerLink:['/register']
      },
      {
        label:"Logout",
        icon:"pi pi-fw pi-power-off",
        routerLink:['/logout']
      }
    ];
}
  

}
