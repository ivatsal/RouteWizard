import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, CanDeactivateFn, Route, RouterStateSnapshot, UrlSegmentGroup } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return false;
};

export const canActivateChild: CanActivateChildFn = (childRoute, state) => {
  return false;
};

export function canLoad(route: Route): boolean {
  return false;
}
export function canMatch(route: ActivatedRouteSnapshot, segments: any[], group: UrlSegmentGroup, routeState: RouterStateSnapshot): boolean {
  return false;
}

export const canDeactivate: CanDeactivateFn<any> = (component: any, currentRoute: any, currentState: any, nextState: any) => {
  return false;
};