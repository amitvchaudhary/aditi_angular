import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car/car.component';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css', '../car/car.component.css']

})
export class CarDetailsComponent implements OnInit {
  @Input() carListnew: Car[] = [];
  
  constructor() { }

  ngOnInit() {
  }

}
