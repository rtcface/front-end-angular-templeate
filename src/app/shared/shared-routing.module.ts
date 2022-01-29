import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: '404',
        component: ErrorPageComponent,
      },
      {
        path: '**',
        redirectTo: '404'
      }
    ]
  }
];


@NgModule({  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
