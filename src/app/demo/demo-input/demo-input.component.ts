import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-input',
  templateUrl: './demo-input.component.html',
  styleUrls: ['./demo-input.component.scss']
})
export class DemoInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onChange(event: any) {
    alert(event);
  }
}
