import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardsComponent } from './guards.component';
import { CanActivateComponent } from './can-activate/can-activate.component';
import { CanActivateChildComponent } from './can-activate-child/can-activate-child.component';
import { CanDeactivateComponent } from './can-deactivate/can-deactivate.component';

import { CanResolveComponent, customResolve } from './can-resolve/can-resolve.component';
import { authGuard, canActivateChild, canLoad, canMatch } from '../auth.guard';
import { CanMatchComponent } from './can-match/can-match.component';
import { CanLoadComponent } from './can-load/can-load.component';

const routes: Routes = [
  { path: '', component: GuardsComponent },
  // { path: '',  redirectTo: 'can-activate', pathMatch: 'full'  },
  { path: 'can-activate', component: CanActivateComponent, canActivate: [authGuard] },
  {
    path: 'can-activate-child', component: CanActivateChildComponent,
    canActivateChild: [canActivateChild],
    children: [],
  },
  {
    path: 'can-deactivate', component: CanDeactivateComponent,
    canDeactivate: [(component: CanDeactivateComponent) => !component.hasUnsavedChanges],
  },
  { path: 'can-load', component: CanLoadComponent, canLoad: [canLoad] },
  { path: 'can-match', component: CanMatchComponent, canMatch: [canMatch] },
  {
    path: 'can-resolve',
    component: CanResolveComponent,
    resolve: { vatsal: customResolve }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuardsRoutingModule { }
