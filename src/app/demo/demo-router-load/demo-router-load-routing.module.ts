import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DemoRouterLoadComponent} from './demo-router-load.component';

const routes: Routes = [
  {
    path: '',
    component: DemoRouterLoadComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
 
export class DemoRouterLoadRougingModule {}
