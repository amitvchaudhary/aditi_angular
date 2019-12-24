import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  title="House Properties"
  house: House ={
    name:'Saurabh',
    color:'White',
    room:5,
    Address:'71,near zydus hospital',
    shape:'Square',
    floor:3,
    door:10,
    window:8,
    entrygateshape:'Round',
    table:'Square'
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
