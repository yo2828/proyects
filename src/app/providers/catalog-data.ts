import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class CatalogData {

    constructor() { }

    public catalog=[
        {
        "id":1,
        "categorie":"br",
        "name":"Kid bedroom 1",
        "price":"1000€/month",
        "image":"../../assets/img/catalog/catalog-1.png",
        "priceNum":1000
        },
        {
        "id":2,
        "categorie":"br",
        "name":"Modern Bedroom",
        "price":"1000€/month",
        "image":"../../assets/img/catalog/catalog-2.png",
        "priceNum":1000
        },
        {
        "id":3,
        "categorie":"lr",
        "name":"Retro living room",
        "price":"1000€/month",
        "image":"../../assets/img/catalog/catalog-3.png",
        "priceNum":1000
        },
        {
        "id":4,
        "categorie":"lr",
        "name":"Modern living room",
        "price":"1000€/month",
        "image":"../../assets/img/catalog/catalog-4.png",
        "priceNum":1000
        },
        {
        "id":5,
        "categorie":"lr",
        "name":"Classic livingroom",
        "price":"1000€/month",
        "image":"../../assets/img/catalog/catalog-5.png",
        "priceNum":1000
        },
        {
        "id":6,
        "categorie":"kt",
        "name":"Modern Kitchen",
        "price":"1000€/month",
        "image":"../../assets/img/catalog/catalog-6.png",
        "priceNum":1000
        },
        {
        "id":7,
        "categorie":"kt",
        "name":"Classic kitchen",
        "price":"1000€/month",
        "image":"../../assets/img/catalog/catalog-7.png",
        "priceNum":1000
        },
        {
        "id":8,
        "categorie":"bt",
        "name":"Classic bathroom",
        "price":"1000€/month",
        "image":"../../assets/img/catalog/catalog-8.png",
        "priceNum":1000
        },
        {
        "id":9,
        "categorie":"bt",
        "name":"Modern bathroom",
        "price":"1000€/month",
        "image":"../../assets/img/catalog/catalog-9.png",
        "priceNum":1000
        },
        {
        "id":10,
        "categorie":"bt",
        "name":"Futuristic bathroom",
        "price":"1000€/month",
        "image":"../../assets/img/catalog/catalog-10.png",
        "priceNum":1000
        }
    ];
  }