import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuardsRoutingModule } from './guards-routing.module';
import { GuardsComponent } from './guards.component';
import { CanActivateComponent } from './can-activate/can-activate.component';
import { CanActivateChildComponent } from './can-activate-child/can-activate-child.component';
import { CanDeactivateComponent } from './can-deactivate/can-deactivate.component';
import { CanResolveComponent } from './can-resolve/can-resolve.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CanMatchComponent } from './can-match/can-match.component';
import { FormsModule } from '@angular/forms';
import { CanLoadComponent } from './can-load/can-load.component';



@NgModule({
  declarations: [
    GuardsComponent,
    CanActivateComponent,
    CanActivateChildComponent,
    CanDeactivateComponent,
    CanResolveComponent,
    CanMatchComponent,
    CanLoadComponent
  ],
  imports: [
    CommonModule,
    GuardsRoutingModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ]
})
export class GuardsModule { }
