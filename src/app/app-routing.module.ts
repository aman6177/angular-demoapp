import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildParentComponent } from './child-parent/child-parent.component';
import { ObservablesComponent } from './observables/observables.component';
import { OnpushComponent } from './onpush/onpush.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { SumComponent } from './sum/sum.component';


const routes: Routes = [
  { path: 'child-parent', component: ChildParentComponent },
  { path: 'parent-child', component: ParentChildComponent },
  { path: 'sum', component: SumComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'onpush', component: OnpushComponent },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
