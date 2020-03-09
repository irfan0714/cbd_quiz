import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BiodataPage } from './biodata';

@NgModule({
  declarations: [
    BiodataPage,
  ],
  imports: [
    IonicPageModule.forChild(BiodataPage),
  ],
})
export class BiodataPageModule {}
