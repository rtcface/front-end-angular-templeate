import { Component, OnInit } from '@angular/core';
import { SkilsService } from '../../services/skils.service';
import { Skil } from '../../models/skil';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  responsiveOptions:any;
  skils: Skil[]=[];

  constructor( private skil_service: SkilsService) { 

    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }


  

  ngOnInit(){
   
   this.skil_service.getSkils()
    .subscribe( resp => { 
      <Skil[]> resp.data
      this.skils = resp.data;
    });


  }

}
