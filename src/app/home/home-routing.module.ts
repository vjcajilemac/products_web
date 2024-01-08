import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from '../layout/skeleton/skeleton.component';
import { HomeComponent } from './home.component';

const routes : Routes =[
  {
    path:'',
    component:SkeletonComponent,
    children: [
      {path:'', component: HomeComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class HomeRoutingModule { }
