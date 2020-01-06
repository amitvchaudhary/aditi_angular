import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../car/car.component';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css', '../car/car.component.css']

})
export class CarDetailsComponent implements OnInit {
  @Input() carListnew: Car[] = [];
  //@Input() Production: Car[] = [];
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

  changeCar(INDEX) {
    this.swapCar.emit(INDEX);
  }

  ngOnDestroy() {
    console.log('Car  detail ngOnDestroy Called');
  }

}
