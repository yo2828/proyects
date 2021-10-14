import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { EntryListModule } from '../habber-entry-list/entry-list.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'entry-list',
        children: [
          {
            path: '',
            loadChildren: () => import('../habber-entry-list/entry-list.module').then(m => m.EntryListModule)
          }
        ]
      },
      {
        path: 'entry-form',
        children: [
          {
            path: '',
            loadChildren: () => import('../habber-entry-form/entry-form.module').then(m => m.EntryFormModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/entry-list',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

