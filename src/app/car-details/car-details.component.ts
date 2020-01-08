import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../car/car.component';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css', '../car/car.component.css']

})
export class CarDetailsComponent implements OnInit {
  @Input() carListnew: Car[] = [];
  @Input() carSendTo: string;
  @Output() swapCar = new EventEmitter();
  
  constructor() {
    console.log('Car detail Constructor Called');
  }

  ngOnInit() {
    console.log('Car  detail ngOnInit Called');
  }

  ngOnChanges() {
    console.log('Car detail ngOnChanges Called');
  }

  changeCar(CAR_SENT_TO, INDEX) {
    let car = {
      
      'carSendTo' : CAR_SENT_TO,
      'index' : INDEX 
    }
    this.swapCar.emit(car);
  }

  ngOnDestroy() {
    console.log('Car  detail ngOnDestroy Called');
  }



}
