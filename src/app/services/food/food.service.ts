import { Injectable } from '@angular/core';
import {Food} from '../../shared/models/Food'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return [
      {
        id:1,
        name:'Pepperoni Pizza',
        cookTime:'20-45mn',
        price:20.000,
        favorite:true,
        stars:4.5,
        imageUrl:'assets/images/pepperoni.jpg',
        tags:['pizza'],
      },
      {
        id:2,
        name:'Champi-Pizza',
        cookTime:'20-45mn',
        price:20.000,
        favorite:true,
        stars:5.0,
        imageUrl:'assets/images/champi.jpg',
        tags:['pizza'],
      },
      {
        id:3,
        name:'Colombi-Pizza',
        cookTime:'20-45mn',
        price:20.000,
        favorite:true,
        stars:4.5,
        imageUrl:'assets/images/colombi.jpg',
        tags:['pizza'],
      },
      {
        id:4,
        name:'Mexi-Pizza',
        cookTime:'20-45mn',
        price:20.000,
        favorite:true,
        stars:4.5,
        imageUrl:'assets/images/mexi.jpg',
        tags:['pizza'],
      },
      {
        id:5,
        name:'Veggi-Pizza',
        cookTime:'20-45mn',
        price:20.000,
        favorite:true,
        stars:4.5,
        imageUrl:'assets/images/veggi.jpg',
        tags:['pizza'],
      },
      {
        id:6,
        name:'Limonada',
        cookTime:'20-35mn',
        price:5.000,
        favorite:true,
        stars:4.5,
        imageUrl:'assets/images/lemon.jpg',
        tags:['bebidas'],
      },
      {
        id:7,
        name:'Coca-cola',
        price:5.000,
        favorite:true,
        stars:4.5,
        imageUrl:'assets/images/cocaCola.jpg',
        tags:['bebeidas'],
      },
      
    ];
  }
}
