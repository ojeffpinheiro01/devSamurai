import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewEntryPage } from './new-entry';

@NgModule({
  declarations: [
    NewEntryPage,
  ],
  imports: [
    IonicPageModule.forChild(NewEntryPage),
  ],
})
export class NewEntryPageModule {}
