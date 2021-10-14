import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EntryListPage } from './entry-list';
import { EntryListPageRoutingModule } from './entry-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntryListPageRoutingModule
  ],
  declarations: [
    EntryListPage
  ]
})
export class EntryListModule { }
