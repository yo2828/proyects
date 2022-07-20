import { Component, OnInit } from '@angular/core';
import { CatalogData } from '../../providers/catalog-data';

@Component({
  selector: 'page-catalog',
  templateUrl: 'catalog.html',
  styleUrls: ['./catalog.scss'],
})
export class CatalogPage implements OnInit{
  constructor(public catalogData: CatalogData) { }
  
  public products= [];

  ngOnInit(){
    this.products=this.catalogData.catalog;
  }
}
