import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //hero: Hero[] = [];
  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }
  
  remove(hero)
  {
    alert(hero.name);
    let itemIndex = this.heroes.indexOf(hero);
    this.heroes.splice(itemIndex, 1);
  }

  // remove(index)
  // {
  //   this.heroes.splice(index, 1);
  // }
}
