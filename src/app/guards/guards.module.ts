import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuardsRoutingModule } from './guards-routing.module';
import { GuardsComponent } from './guards.component';
import { CanActivateComponent } from './can-activate/can-activate.component';
import { CanActivateChildComponent } from './can-activate-child/can-activate-child.component';
import { CanLoadComponent } from './can-load/can-load.component';
import { CanDeactivateComponent } from './can-deactivate/can-deactivate.component';
import { CanResolveComponent } from './can-resolve/can-resolve.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    GuardsComponent,
    CanActivateComponent,
    CanActivateChildComponent,
    CanLoadComponent,
    CanDeactivateComponent,
    CanResolveComponent
  ],
  imports: [
    CommonModule,
    GuardsRoutingModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class GuardsModule { }
