import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserResolver } from './user.resolver';

const routes: Routes = [
  // {
  //   path: '', component: UsersComponent,
  // },
  { path: '', redirectTo: '/users/all', pathMatch: 'full' },
  {
    path: ':userType',
    resolve: {
      user: UserResolver
    },
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
