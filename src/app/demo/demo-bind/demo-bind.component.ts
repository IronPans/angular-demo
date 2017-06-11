import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-bind',
  templateUrl: './demo-bind.component.html',
  styleUrls: ['./demo-bind.component.scss']
})
export class DemoBindComponent implements OnInit {

  isChanged: boolean;
  borderClass: any;
  isTrue: boolean;
  isActive: boolean;
  backgroundStyle: any;
  name: string;
  tel: string;
  constructor() { }

  ngOnInit() {
    this.borderClass = {active: !this.isTrue};

    this.isActive = true;

    this.backgroundStyle = { 'background-color': this.isActive ? 'red' : 'blue'};
  }

  onClick() {
    alert('你点了我');
  }

  onBlur(event: any) {
    alert(event.target.value);
  }

  modelChagne() {
    alert(this.tel);
  }
}
