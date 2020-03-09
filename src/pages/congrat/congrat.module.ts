import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CongratPage } from './congrat';

@NgModule({
  declarations: [
    CongratPage,
  ],
  imports: [
    IonicPageModule.forChild(CongratPage),
  ],
})
export class CongratPageModule {}
