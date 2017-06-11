import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-demo-router',
  templateUrl: './demo-router.component.html',
  styleUrls: ['./demo-router.component.scss']
})
export class DemoRouterComponent implements OnInit {

  id: any;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(param => {
      this.id = param['id'];
    })
  }

  ngOnInit() {
  }

}
