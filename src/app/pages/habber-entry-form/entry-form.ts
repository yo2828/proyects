import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'page-entry-form',
  templateUrl: 'entry-form.html',
  styleUrls: ['./entry-form.scss'],
})

export class EntryFormPage implements OnInit {
  
  desktop: boolean;

  constructor(
    public router: Router,
    public platform: Platform
  ) {}
    

  ngOnInit() {
    this.desktop = this.platform.is("desktop") || this.platform.is("electron");
  }

}
