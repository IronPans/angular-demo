import {Component, OnInit, ViewContainerRef, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-trend-template',
  templateUrl: './trend-template.component.html',
  styleUrls: ['./trend-template.component.scss']
})
export class TrendTemplateComponent implements OnInit {

  @Input() template: any;
  constructor(private _viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    if (this.template) {
      this._viewContainerRef.createEmbeddedView(this.template);
    }
  }

}
