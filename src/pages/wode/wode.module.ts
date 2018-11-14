import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { wodePage } from './wode';

@NgModule({
  declarations: [
    wodePage,
  ],
  imports: [
    IonicPageModule.forChild(wodePage),
  ],
})
export class wodePageModule {}
