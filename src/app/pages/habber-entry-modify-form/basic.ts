import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-basic',
  templateUrl: 'basic.html',
  styleUrls: ['./basic.scss'],
})
export class BasicPage {
  constructor(
    public router: Router
  ) { }
}
