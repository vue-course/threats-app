import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<footer> All rights reserved @ Angular Basics Course by LironHazan 2019 </footer>`,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
