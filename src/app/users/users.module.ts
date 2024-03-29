import { AddComponent } from './pages/add/add.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SearchComponent } from './pages/search/search.component';
import { UserComponent } from './pages/user/user.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddComponent,
    HomeComponent,
    ListComponent,
    SearchComponent,
    UserComponent   
  ],
  imports: [    
    CommonModule,
    PrimeNgModule,
    UsersRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class UsersModule { }
