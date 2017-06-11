import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss']
})
export class CardFooterComponent implements OnInit {

  @Output() onChange: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onBlur(value: string) {
    this.onChange.emit(value); // 传播事件
  }
}
