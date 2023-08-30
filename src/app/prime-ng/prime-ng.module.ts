import { NgModule } from '@angular/core';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [],
  imports:[
    MenuModule
  ],
  exports: [
    MenuModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
