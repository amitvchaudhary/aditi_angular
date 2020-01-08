import { Component, OnInit, Input } from '@angular/core';
import { NewserviceService } from '../newservice.service';

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
  no1: string;
  no2:string;
  result:string;
  constructor( private demo: NewserviceService) {
    console.log('Car Constructor Called');
  }

  ngOnInit() {
    console.log('Car ngOnInit Called');
  }

  ngOnChanges() {
    console.log('Car ngOnChanges Called');
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
    var firstCar = this.carList.shift();
    this.caraddList.push(firstCar);
  }
  sendFirstCarToStock() {
    var firstCar = this.caraddList.shift();
    this.carList.push(firstCar);
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
  addstring()
  {
      this.result = this.demo.addstring(this.no1 , this.no2);
  }
  

  sendCar(e) {
    if(e.carSendTo =='stock')
    {
      this.sendToStock(e.index);
      
    } else if(e.carSendTo =='prodcution')
    {
      this.sendToProduction(e.index);
    }
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

  ngOnDestroy() {
    console.log('Car ngOnDestroy Called');
  }
}
export class Car {
  name: string;
  color: string;
  Variant: string;
  Price: number;
  key: string;
}
