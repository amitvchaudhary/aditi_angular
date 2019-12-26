import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carList: Car[] = [];
  
  constructor() { }

  ngOnInit() {
  }
  getcar() {
    const car = new Car();
    car.name = 'agguar';
    car.color = 'black';
    car.type = 'sidden';
    car.door = '3 door';
    this.carList.push(car);
  }
  
}
export class Car {
  name: string;
  color: string;
  type: string;
  door: string;

}