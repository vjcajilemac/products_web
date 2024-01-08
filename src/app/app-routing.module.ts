import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/',
    pathMatch: 'full'
    //component: SkeletonComponent,
  },
  {
    path: '',
    component: SkeletonComponent,
    children:[
      {
        path:'home',  component:HomeComponent
        //path:'home',loadChildren:()=> HomeComponent
      }
    ]

  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
