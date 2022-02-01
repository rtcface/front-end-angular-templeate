import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import {AvatarModule} from 'primeng/avatar';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
  exports: [
    ButtonModule,
    SidebarModule,
    MenubarModule,
    AvatarModule,
    ToolbarModule
   ]
})
export class PrimeNgModule { }
