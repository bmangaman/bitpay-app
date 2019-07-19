import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolboxComponent } from './toolbox.component';

const routes: Routes = [
  { path: '', component: ToolboxComponent },
];

@NgModule({
  declarations: [
    ToolboxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    ToolboxComponent,
  ],
  providers: [],
  bootstrap: [],
})
export class ToolboxModule { }
