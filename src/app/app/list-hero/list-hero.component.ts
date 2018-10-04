import { Component, OnInit } from '@angular/core';
import { Hero } from '../entities/hero';
import { ListHeroes } from '../data/heroes';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.css']
})
export class ListHeroComponent implements OnInit {

  listHeroes: Hero[];
  selectedHero: Hero; //khai bao 1 doi tuong Hero duoc chon
  constructor() 
  {
    this.listHeroes = ListHeroes;
  }
  ngOnInit() {
  }

  //Khai bao 1 dinh nghia ham
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    
  }
}
