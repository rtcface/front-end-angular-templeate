import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { NgModule } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  exports: [
    AvatarModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    DataViewModule,
    DropdownModule,    
    InputTextModule,
    MenubarModule,
    RippleModule, 
    SidebarModule,
    TabViewModule,
    ToastModule,
    ToolbarModule,
    TooltipModule,
   ]
})
export class PrimeNgModule { }
