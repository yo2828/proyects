import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  public cart=[];
  public totalPrice=0;
  constructor( 
    public router: Router,
    public userData: UserData,
    ) { }

  ngOnInit() {
    this.userData.getCart().then( value =>{
      this.cart=value;
      this.cart.forEach(element => {this.totalPrice+=element.priceNum*element.subDuration;});
    });
  }

  buyFunc(){
    this.userData.cleanCart().then( ()=> {
      this.router.navigateByUrl('/confirm');
    });
  }

}
