import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardsComponent } from './guards.component';
import { CanActivateComponent } from './can-activate/can-activate.component';
import { CanActivateChildComponent } from './can-activate-child/can-activate-child.component';
import { CanDeactivateComponent } from './can-deactivate/can-deactivate.component';
import { CanLoadComponent } from './can-load/can-load.component';
import { CanResolveComponent } from './can-resolve/can-resolve.component';
import { authGuard } from '../auth.guard';

const routes: Routes = [
  { path: '', component: GuardsComponent },
  // { path: '',  redirectTo: 'can-activate', pathMatch: 'full'  },
  { path: 'can-activate', component: CanActivateComponent, canActivate: [authGuard] },
  { path: 'can-activate-child', component: CanActivateChildComponent },
  { path: 'can-deactivate', component: CanDeactivateComponent },
  { path: 'can-load', component: CanLoadComponent },
  { path: 'can-resolve', component: CanResolveComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuardsRoutingModule { }
