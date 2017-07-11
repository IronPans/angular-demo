import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef, ComponentFactoryResolver } from '@angular/core';
import {TrendComponentComponent} from '../../components/trend-component/trend-component.component';

@Component({
  selector: 'app-demo-trend',
  templateUrl: './demo-trend.component.html',
  styleUrls: ['./demo-trend.component.scss']
})
export class DemoTrendComponent implements OnInit {

  @ViewChild('viewcontainer', {read: ViewContainerRef}) _viewContainerRef: ViewContainerRef;
  @ViewChild('tpl2') template: TemplateRef<any>;

  @ViewChild('trendViewContainer', {read: ViewContainerRef}) _trendViewContainerRef: ViewContainerRef;
  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this._viewContainerRef.createEmbeddedView(this.template);

    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(TrendComponentComponent);
    const componentRef = this._trendViewContainerRef.createComponent(componentFactory);
    (<any>componentRef.instance).title = '我是动态组件';
  }

  onclick() {
    alert('我是动态模板中的内容');
  }

}
