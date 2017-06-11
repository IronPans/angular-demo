import {Component, HostBinding, OnInit} from '@angular/core';
import {animate, state, style, trigger, transition} from '@angular/animations';

@Component({
  selector: 'app-demo-child-router2',
  templateUrl: './demo-child-router2.component.html',
  styleUrls: ['./demo-child-router2.component.scss'],
  animations: [
    trigger('fadeInUpState', [
      state('in', style({opacity: 1, transform: 'translate3d(0, 0, 0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translate3d(0, 100%, 0)'
        }), animate('.4s cubic-bezier(.25,.8,.25,1)')
      ])
    ])
  ]
})
export class DemoChildRouter2Component implements OnInit {

  @HostBinding('@fadeInUpState') fadeInUpState;
  @HostBinding('style.display') display = 'block';
  constructor() { }

  ngOnInit() {
  }

}
