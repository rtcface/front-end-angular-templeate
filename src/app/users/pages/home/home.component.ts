import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  constructor(private primengConfig: PrimeNGConfig) { }

  items=[];
  visibleSidebar1: boolean = false;
  block: boolean = true;

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  

  showVisibleSidebar() {
    console.log("showVisibleSidebar---------Tmp---------------------");
    this.visibleSidebar1 = true;
  }
}


