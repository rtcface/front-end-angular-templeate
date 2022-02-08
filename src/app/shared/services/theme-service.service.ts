import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {

  constructor(@Inject(DOCUMENT) private doc:Document ) {
    console.log('service:');
   }

  
  swtichTheme(theme:string){
    let themeLink: HTMLLinkElement = this.doc.getElementById('theme-css') as HTMLLinkElement;
    
    if(themeLink){
      console.log('service:'+themeLink);
      let uri = `assets/css/${theme}/theme.css`;
      themeLink.href = uri;
    }
  }



}


