import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss'],
  inputs: ['content']
})
export class CardHeaderComponent implements OnInit {

  @Input() title: string;
  content: string;

  _count: number;
  @Input()
  set count(value: number) {
    this._count = value + 1;
  }
  get count(): number {
    return this._count;
  }
  constructor() { }

  ngOnInit() {
  }

}
