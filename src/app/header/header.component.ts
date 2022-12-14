import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(){}

  menuVariable: boolean = false;
  menu__icon__variable:boolean = false;
  openMenu(){
    this.menuVariable =! this.menuVariable;
    this.menu__icon__variable =! this.menu__icon__variable;
  }
  ngOnInit():void{

  }

}
