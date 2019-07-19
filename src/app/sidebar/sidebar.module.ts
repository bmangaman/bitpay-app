import { NgModule } from '@angular/core';

import { NavigationModule } from './navigation/navigation.module';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    NavigationModule,
  ],
  exports: [
    SidebarComponent,
  ],
  providers: [],
  bootstrap: [],
})
export class SidebarModule { }
