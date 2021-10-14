import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntryListPage } from './entry-list';

const routes: Routes = [
  {
    path: '',
    component: EntryListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryListPageRoutingModule { }
