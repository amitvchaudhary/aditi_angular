import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  house: House ={
    name:'saurabh',
    color:'White',
    room:5,
    Address:'71,near zydus hospital',
    shape:'square',
    floor:3,
    door:10,
    window:8,
    entrygateshape:'round',
    table:'square'
  }
  
  constructor() { }

  ngOnInit() {
  }

}
export class House {
  
  name: string;
  color: string;
  room :number;
  Address :string;
  shape : string;
  floor: number;
  door : number;
  window : number;
  entrygateshape : string;
  table : string;
}
