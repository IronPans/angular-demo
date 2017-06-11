import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.scss']
})
export class DemoFormComponent implements OnInit {

  name: string;
  sex: string;
  tel: string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(valid: boolean) {
    if (valid) {
      alert('用户：' + this.name + ';性别：' + this.sex);
    }
  }
}
