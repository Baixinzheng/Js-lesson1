import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { jiajuPage } from './jiaju';

@NgModule({
  declarations: [
    jiajuPage,
  ],
  imports: [
    IonicPageModule.forChild(jiajuPage),
  ],
})
export class jiajuPageModule {}
