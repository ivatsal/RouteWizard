import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { SecondComponent } from './second.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PrimaryComponent } from './primary/primary.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { ThirdComponent } from './third/third.component';


@NgModule({
  declarations: [
    SecondComponent,
    PrimaryComponent,
    SecondaryComponent,
    ThirdComponent
  ],
  imports: [
    CommonModule,
    SecondRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class SecondModule { }
