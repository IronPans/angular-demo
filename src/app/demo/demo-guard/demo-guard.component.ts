import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-guard',
  templateUrl: './demo-guard.component.html',
  styleUrls: ['./demo-guard.component.scss']
})
export class DemoGuardComponent implements OnInit {

  name: string = '123';
  constructor() {
    localStorage.clear();
  }

  ngOnInit() {
  }

  onSubmit(account: string, pwd: string) {
    if (account === '123' && pwd === '123') {
      localStorage.setItem('user', JSON.stringify({account: account, password: pwd}));
      alert('登录成功，你可以看图片了，嘿嘿');
    }
  }

}
