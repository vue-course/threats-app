import { Component, OnInit } from '@angular/core';
import {threats} from './threats.mock';

@Component({
  selector: 'app-threats',
  templateUrl: './threats.component.html',
  styleUrls: ['./threats.component.sass']
})
export class ThreatsComponent implements OnInit {
  threats;
  constructor() { }

  ngOnInit() {
    this.threats = threats;
    console.log(this.threats);
  }

}
