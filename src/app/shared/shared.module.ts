import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListItemComponent } from './list/list-item/list-item.component';
import { ListContainerComponent } from './list/list-container/list-container.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ ListItemComponent, ListContainerComponent],
  exports: [ ListItemComponent, ListContainerComponent]
})
export class SharedModule { }
