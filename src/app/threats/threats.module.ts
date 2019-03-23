import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ThreatsComponent} from './threats.component';
import {ThreatsRoutingModule} from './threats-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ThreatsRoutingModule,
    SharedModule
],
  declarations: [
    ThreatsComponent
 ]
})
export class ThreatsModule { }
