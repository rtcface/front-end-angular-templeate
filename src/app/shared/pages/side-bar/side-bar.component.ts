import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from '../../services/theme-service.service';
import { Theme } from '../../../users/models/theme';
import { SkilsService } from '../../../users/services/skils.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  listThemes:Theme[]=[];

  constructor( 
    private changeThem:ThemeServiceService,
    private theme:SkilsService
    ) { }
  visibleSidebar1: boolean = false;
  ngOnInit(): void {
    this.theme.getThem()
    .subscribe( resp => { 
      <Theme[]> resp.data
      this.listThemes = resp.data;
    });
  }


  chagetheme(theme:string){
    const themeLink= document.querySelector('#theme');    
    const uri = `assets/css/${theme}/theme.css`;   
    themeLink?.setAttribute('href',uri);
  }
}
