import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { ListComponent } from './pages/list/list.component';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HomeComponent,
    UserComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
