import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-entry-list',
  templateUrl: 'entry-list.html',
  styleUrls: ['./entry-list.scss'],
})
export class EntryListPage {
  constructor(
    public router: Router
  ) { }
}
