import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<header>
    <ng-content></ng-content>
    {{ user }}
  </header>`,
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent  {
  @Input() user;
}
