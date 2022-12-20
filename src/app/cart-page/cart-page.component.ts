import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CarService } from '../services/cart/car.service';
import { CartItem } from '../shared/models/CartItem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  cart!: Cart;  
  constructor(private carService: CarService, private foodService:FoodService){
    
    this.setCart();
  }
  ngOnInit(): void {
      
  }

  removeFromCart(cartItem:CartItem){
    this.carService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.carService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();
  }


  setCart(){
    this.cart = this.carService.getCart();
  }
 

}
