import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car: Car = new Car();
  carList: Car[] = [];
  visibleCar: string;

  constructor() { }

  ngOnInit() {
  }
  addcar(KEY) {
    const newCar: Car = new Car();
    newCar.name = this.car.name;
    newCar.color = this.car.color;
    newCar.Variant = this.car.Variant;
    newCar.Price = this.car.Price;
    newCar.key = KEY;
    this.carList.push(newCar);
  }
  showcar(CAR) {
    this.visibleCar = CAR;
  }
}
export class Car {
  name: string;
  color: string;
  Variant: string;
  Price: string;
  key: string;
}