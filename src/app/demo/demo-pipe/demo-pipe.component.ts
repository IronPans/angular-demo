import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-pip',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.scss']
})
export class DemoPipeComponent implements OnInit {

  today: any;

  jsonObject: Object = {firstname: 'bar', lastname: 'qux', address: {street: 'aaa', tel: [1, 2]}};

  aa: number = 2.718281828459045;
  bb: number = 33456;

  ac: number = 0.259;
  bc: number = 20.6745;

  ad: number = 0.279;
  bd: number = 0.657;
  birthday: any;
  toggle: boolean;

  arr: number[] = [80, 2, 5, 30];

  constructor() { }

  ngOnInit() {
    this.today = new Date();
    this.birthday = new Date();
  }
  toggleFormat() { this.toggle = !this.toggle; }
  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
}
