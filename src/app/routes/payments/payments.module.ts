import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentsComponent } from './payments.component';
import { TableModule } from './table/table.module';

const routes: Routes = [
  { path: '', component: PaymentsComponent },
];

@NgModule({
  declarations: [
    PaymentsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
  ],
  exports: [
    PaymentsComponent,
  ],
  providers: [],
  bootstrap: [],
})
export class PaymentsModule { }
