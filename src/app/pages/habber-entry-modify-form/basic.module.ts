import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BasicPage } from './basic';
import { BasicPageRoutingModule } from './basic-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasicPageRoutingModule
  ],
  declarations: [
    BasicPage
  ]
})
export class BasicModule { }
