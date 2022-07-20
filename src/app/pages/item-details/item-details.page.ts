import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';
import { CatalogData } from '../../providers/catalog-data';
import { UserData } from '../../providers/user-data';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {
  selectedSize: number;
  selectedColor: number;
  activeVariation: string;
  itemData;

  constructor(
    private animatioCntrl: AnimationController,
    private catalogData: CatalogData,
    private route: ActivatedRoute,
    private userData: UserData,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activeVariation = 'size';
    let id = this.route.snapshot.paramMap.get('id');
    //@ts-ignore
    this.itemData=this.catalogData.catalog[id-1];
    this.itemData.subDuration=1;
  }

  segmentChanged(e: any) {
    this.activeVariation = e.detail.value;

    if (this.activeVariation == 'color') {
      this.animatioCntrl.create()
      .addElement(document.querySelector('.sizes'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(0px)', 'translateX(100%)')
      .fromTo('opacity', '1', '0.2')
      .play();

      this.animatioCntrl.create()
      .addElement(document.querySelector('.colors'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
      .fromTo('opacity', '0.2', '1')
      .play();
    } else {
      this.animatioCntrl.create()
      .addElement(document.querySelector('.sizes'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(100%)', 'translateX(0)')
      .fromTo('opacity', '0.2', '1')
      .play();

      this.animatioCntrl.create()
      .addElement(document.querySelector('.colors'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(0px)', 'translateX(-100%)')
      .fromTo('opacity', '1', '0.2')
      .play();
    }
  }

  changeSize(size: number) {
    this.selectedSize = size;
  }

  changeColor(color: number) {
    this.selectedColor = color;
  }

  addToCart(item){
    this.userData.addToCart(item);
  }

  buyNow(item){
    this.userData.addToCart(item).then( ()=> {
      this.router.navigateByUrl('/cart');
    });
  }

  changeItem(newValue){
    if(newValue>0){
      this.itemData.subDuration=newValue;
    }
  }
}
