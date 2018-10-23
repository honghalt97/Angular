import { Component, OnInit } from '@angular/core';
import { Hero } from '../entities/hero';
import { ListHeroes } from '../data/heroes';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.css']
})
export class ListHeroComponent implements OnInit {

  listHeroes: Hero[];
  selectedHero: Hero; //khai bao 1 doi tuong Hero duoc chon
  constructor(private heroServices: HeroService) //bo tư heroservices.ts vao day
  {
    // this.listHeroes = ListHeroes;
  }
  ngOnInit() {
    //this.listHeroes = this.heroServices.getHeroes();
    this.heroServices.getHeroes().subscribe(
       x => {
        this.listHeroes = x},
        error => {
          console.log('error!');
        }  

    );
    //get hero by ID
    this.selectedHero = this.heroServices.getHeroesByID(1);

  }

  //Khai bao 1 dinh nghia ham
  onSelect(hero: Hero): void {
    this.selectedHero = this.heroServices.getHeroesByID(hero.id);
  }
}
