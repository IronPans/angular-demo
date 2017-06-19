import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-demo-animation',
  templateUrl: './demo-animation.component.html',
  styleUrls: ['./demo-animation.component.scss'],
  animations: [
    trigger('colorState', [
      state('active', style({
      	background: 'red'
      })),
      state('inactive', style({
      	background: 'blue'
      })),
      transition('active => inactive', animate('500ms ease-in')),
      transition('inactive => active', animate('500ms ease-out'))
    	]),

    trigger('moveInState', [
      state('in', style({opacity: 1, transform: 'translate3d(0,0,0)'})),
      transition('void => *', [
      	style({transform: 'translate3d(0, 100px, 0)', opacity: 0}),
      	animate(200)
      	]),
      transition('* => void', [
      	animate(200, style({transform: 'translate3d(0, 100px, 0)', opacity: 0}))
      	])
      ]),

    trigger('expandState', [
      state('active', style({
	    height: '*'
	  })),
	  state('inactive', style({
	    height: 0
	  })),
	  transition('active <=> inactive', animate('300ms ease'))
	])
  ]
})
export class DemoAnimationComponent implements OnInit {

  isActive: boolean;
  isIn: boolean;
  isExpand: boolean;
  expandClass: string;

  isExpand2: boolean;
  expandClass2: string;
  state: string;
  constructor() { }

  ngOnInit() {
  	this.expandClass = this.isExpand ? 'active' : 'inactive';
  	this.expandClass2 = this.isExpand2 ? 'active' : 'inactive';
  }

  toActive() {
    this.isActive = !this.isActive;
  }

  toIn() {
  	this.isIn = !this.isIn;
  }

  open() {
  	this.isExpand = !this.isExpand;
  	this.expandClass = this.isExpand ? 'active' : 'inactive';
  }

  open2() {
  	this.isExpand2 = !this.isExpand2;
  	this.expandClass2 = this.isExpand2 ? 'active' : 'inactive';
  }

  transitionStart(event: any) {
  	this.state = '动画开始';
    console.log(event);
  }

  transitionEnd(event: any) {
    this.state = '动画结束';
  }
}
