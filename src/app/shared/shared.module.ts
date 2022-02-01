import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    ErrorPageComponent,
    SideBarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    PrimeNgModule
  ],
  exports: [
    ErrorPageComponent,
    SideBarComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
