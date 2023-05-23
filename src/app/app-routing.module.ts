import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
// name should always start with upper case
import { authGuard } from './auth.guard';

const routes: Routes = [
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'first-tab', component: FirstComponent },
  { path: 'second', loadChildren: () => import('./second/second.module').then(m => m.SecondModule) },
  
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule),  
    data: {
      id: 7,
      name: 'task 7',
      title: 'Route with data'
    } },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  
  { path: '**', component: PageNotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
