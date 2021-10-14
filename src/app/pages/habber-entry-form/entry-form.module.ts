import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EntryFormPage } from './entry-form';
import { EntryFormPageRoutingModule } from './entry-form-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntryFormPageRoutingModule
  ],
  declarations: [
    EntryFormPage
  ]
})
export class EntryFormModule{ 

}
