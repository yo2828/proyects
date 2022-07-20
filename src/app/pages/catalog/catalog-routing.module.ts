import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogPage } from './catalog';

const routes: Routes = [
  {
    path: '',
    component: CatalogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogPageRoutingModule { }
