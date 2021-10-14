import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicPage } from './basic';

const routes: Routes = [
  {
    path: '',
    component: BasicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicPageRoutingModule { }
