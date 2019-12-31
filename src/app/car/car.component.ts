import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car: Car = new Car();
  carList: Car[] = [];
  caraddList: Car[] = [];
  //visibleCar: string;

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
    //  this.caraddList = this.carList;
  }

  sendFirstCarToProduction() {
    if(this.carList.length > 0) {
    var removecar = this.carList.shift();
    this.caraddList.push(removecar);
    }
    else{
      
    }

  }
  sendFirstCarToStock() {
    var addcar = this.caraddList.shift();
    this.carList.push(addcar);
  }

  sendToStock(carIndex) {
    this.carList.push(this.caraddList[carIndex]);
    this.caraddList.splice(carIndex, 1);
  }
  sendToProduction(carIndex) {
    this.caraddList.push(this.carList[carIndex]);
    this.carList.splice(carIndex, 1);

    // var removecar: any = this.carList[carIndex];
    // this.caraddList.push(removecar);
    // this.carList.splice(carIndex, 1);
  }









  // showcar(CAR) {
  //   this.visibleCar = CAR;
  // }
  // addCar(name: string, color: string, variant: string, Price: number) {
  //   const newCar: Car = new Car();
  //   newCar.name = name;
  //   newCar.color = color;
  //   newCar.Variant = variant;
  //   newCar.Price = Price;

  //   this.carList.push(newCar);
  // }
}
export class Car {
  name: string;
  color: string;
  Variant: string;
  Price: number;
  key: string;
}