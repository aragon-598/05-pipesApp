import { Color, Hero } from './../../interfaces/hero.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase:boolean = false;

  public keyOrder:keyof Hero | '' = '';

  public heroes:Hero[] = [
    {
      name:'Superman',
      canFly:true,
      color: Color.blue
    },
    {
      name:'Batman',
      canFly:false,
      color: Color.black
    },
    {
      name:'Daredevil',
      canFly:false,
      color: Color.red
    },
    {
      name:'Robin',
      canFly:false,
      color: Color.blue
    },
    {
      name:'Linterna verde',
      canFly:true,
      color: Color.green
    }
  ]

  toggleUperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }

  changeKeyOrder(value:keyof Hero | ''):void{
    this.keyOrder = value;
  }

}
