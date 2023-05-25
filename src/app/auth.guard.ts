import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, CanDeactivateFn, CanMatchFn, ResolveFn, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return false;
};

export const canActivateChild: CanActivateChildFn = (childRoute, state) => {
  return false;
};

export const canDeactivate: CanDeactivateFn<any> = (component: any, currentRoute: any, currentState: any, nextState: any) => {
  return false;
};

export const canMatch: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  return false;
};

export const resolve: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return false;
};

export function canLoad(route: Route): boolean {
  return false;
};