import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DemoRouterLoadComponent} from './demo-router-load.component';
import {DemoRouterLoadRougingModule} from './demo-router-load-routing.module';

@NgModule({
  imports: [CommonModule, DemoRouterLoadRougingModule],
  declarations: [DemoRouterLoadComponent] 
})

export class RouterLoadModule {}
