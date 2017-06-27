import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {DemoGuardComponent} from '../demo/demo-guard/demo-guard.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<DemoGuardComponent> {

  oldName: string = '123';
  canDeactivate(component: DemoGuardComponent,
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Promise<boolean> | boolean {
      if (this.oldName === component.name) {
        return true;
      }
    return confirm('信息未保存，确认要离开！');
  }
}
