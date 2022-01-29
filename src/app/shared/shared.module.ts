import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [
    ErrorPageComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
