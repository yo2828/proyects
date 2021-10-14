import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';

@Component({
  template: `
    <ion-list>
      <ion-item button (click)="close('https://habber.com/')">
        <ion-label>Web page</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://es.linkedin.com/company/habber-tec')">
        <ion-label>Linkedin</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://twitter.com/habbertec?lang=es')">
        <ion-label>Twitter</ion-label>
      </ion-item>
      <ion-item button routerLink="/support" routerLinkActive="active" routerDirection="root" detail="false" (click)="support()">
        <ion-label>Support</ion-label>
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public popoverCtrl: PopoverController) {}

  support() {
    // this.app.getRootNavs()[0].push('/support');
    this.popoverCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }
}
