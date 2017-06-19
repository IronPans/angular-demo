import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DemoComponentComponent} from '../demo/demo-component/demo-component.component';
import {DemoStyleComponent} from '../demo/demo-style/demo-style.component';
import {DemoBindComponent} from '../demo/demo-bind/demo-bind.component';
import {DemoInputComponent} from '../demo/demo-input/demo-input.component';
import {DemoDirectiveComponent} from '../demo/demo-directive/demo-directive.component';
import {DemoPipeComponent} from '../demo/demo-pipe/demo-pipe.component';
import {DemoServiceComponent} from '../demo/demo-service/demo-service.component';
import {DemoAnimationComponent} from '../demo/demo-animation/demo-animation.component';
import {DemoRouterComponent} from '../demo/demo-router/demo-router.component';
import {DemoFormComponent} from '../demo/demo-form/demo-form.component';
import {DemoRouter2Component} from '../demo/demo-router2/demo-router2.component';
import {DemoChildRouterComponent} from '../demo/demo-child-router/demo-child-router.component';
import {DemoChildRouter2Component} from '../demo/demo-child-router2/demo-child-router2.component';
import {DemoGuardComponent} from '../demo/demo-guard/demo-guard.component';
import {DemoImageComponent} from '../demo/demo-image/demo-image.component';
import {AuthGuard} from '../guard/auth.guard';
import {DemoGuardChildComponent} from "../demo/demo-guard-child/demo-guard-child.component";

const routes: Routes = [
  {path: 'demoComponent', component: DemoComponentComponent},
  {path: 'demoStyle', component: DemoStyleComponent},
  {path: 'demoBind', component: DemoBindComponent},
  {path: 'demoInput', component: DemoInputComponent},
  {path: 'demoDirective', component: DemoDirectiveComponent},
  {path: 'demoService', component: DemoServiceComponent},
  {path: 'demoPipe', component: DemoPipeComponent},
  {path: 'demoForm', component: DemoFormComponent},
  {path: 'demoRouter/:id', component: DemoRouterComponent},
  {
    path: 'demoRouter2',
    component: DemoRouter2Component,
    children: [{
      path: 'child',
      component: DemoChildRouterComponent
    }, {
      path: 'child2',
      component: DemoChildRouter2Component
    }, {
      path: 'loadModule',
      loadChildren: '../demo/demo-router-load/demo-router-load.module#RouterLoadModule',
    }]
  },
  {path: 'demoAnimation', component: DemoAnimationComponent},
  {
    path: 'demoGuard',
    component: DemoGuardComponent,
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'child', component: DemoGuardChildComponent}
        ]
      }
    ]
  },
  { path: 'images',
    canActivate: [AuthGuard],
    component: DemoImageComponent},
  {path: '**', component: DemoComponentComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {
}
