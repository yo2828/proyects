import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogData } from '../../providers/catalog-data';
import { UserData } from '../../providers/user-data';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.page.html',
  styleUrls: ['./my-cart.page.scss'],
})
export class MyCartPage implements OnInit {

  public cart=[];
  constructor(
    public userData: UserData,
    public router: Router
    ) { }

  ngOnInit() {
    this.userData.getCart().then( value =>{
      this.cart=value;
    });
  }

  removeItem(id){
    let index=this.cart.findIndex(object => {
      return object.id == id;
    });
    this.userData.deleteCartItem(index).then( ()=> {
      this.userData.getCart().then( value =>{
        this.cart=value;
      });
    });
  }

  changeItem(id, months){
    if(months>0){
      let auxCart=this.cart;
      let index=auxCart.findIndex(object => {
        return object.id == id;
      });
      auxCart[index].subDuration=months;

      this.userData.setCart(auxCart).then( ()=> {
        this.userData.getCart().then( value =>{
          this.cart=value;
        });
      });
    }
  }

  cleanCart(){
    this.userData.cleanCart().then( ()=> {
      this.userData.getCart().then( value =>{
        this.cart=value;
      });
    });
  }
}
