import { Component, OnInit } from '@angular/core';
import {CatalogData} from '../../providers/catalog-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['./home.scss'],
})
export class HomePage implements OnInit{
  constructor(public catalogData: CatalogData) { }
  
  public bestSold= [];
  
  public categories=[
    {
    id: 1,
    name: 'Living room',
    image: '../../assets/img/categories/category-1.png'
    },
    {
      id: 2,
      name: 'Bedroom',
      image: '../../assets/img/categories/category-2.png'
    },
    {
      id: 3,
      name: 'Bathroom',
      image: '../../assets/img/categories/category-3.png'
    },
    {
      id: 4,
      name: 'Kitchen',
      image: '../../assets/img/categories/category-4.png'
    }
  ];

  ngOnInit(){
    this.bestSold=this.catalogData.catalog.slice(0,5);
  }
}
