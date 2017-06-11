import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.scss']
})
export class DemoDirectiveComponent implements OnInit {

  isShow: boolean;
  books: any;
  isShowElse: boolean;
  animal: string;
  isMyShow: boolean;
  constructor() { }

  ngOnInit() {
    this.isShowElse = true;
    this.books = ['HTML', 'Javascript'];

    this.animal = 'dog';
  }

}
