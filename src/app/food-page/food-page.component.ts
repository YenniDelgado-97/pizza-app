import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../services/cart/car.service';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit{

  food!: Food;
  constructor(private activatedRoute:ActivatedRoute,
    private foodService: FoodService,
    private carService:CarService,
    private router: Router){

    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.food = foodService.getFoodById(params['id']);
    })

  }

  ngOnInit(){

  }

  addToCart(){
    this.carService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
