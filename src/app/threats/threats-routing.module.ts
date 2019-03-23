import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ThreatsComponent} from './threats.component';
import {AuthGuard} from '../auth/auth.guard';

const authRoutes: Routes = [
  { path: 'threats',
    component: ThreatsComponent,
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ThreatsRoutingModule {}
