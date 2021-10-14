import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntryFormPage } from './entry-form';

const routes: Routes = [
  {
    path: '',
    component: EntryFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryFormPageRoutingModule { }
