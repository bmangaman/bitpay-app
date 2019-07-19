import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'payments', loadChildren: () => import('./routes/payments/payments.module').then(m => m.PaymentsModule) },
  { path: 'toolbox', loadChildren: () => import('./routes/toolbox/toolbox.module').then(m => m.ToolboxModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
