import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: './layout/product/product.module#ProductModule' },
  { path: 'login', loadChildren: './layout/users/user.module#UserModule' },
];

export const AppRoutes = RouterModule.forRoot(routes, { useHash: false });
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
