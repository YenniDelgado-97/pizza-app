import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():String[]{
    return [
      '/assets/images/champi.jpg',
      '/assets/images/cocaCola.jpg',
      '/assets/images/colombi.jpg',
      '/assets/images/lemon.jpg',
      '/assets/images/mexi.jpg',
      '/assets/images/pepperoni.jpg',
      '/assets/images/veggi.jpg',
    ]
  }
}
