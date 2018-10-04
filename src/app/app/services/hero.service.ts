import { Injectable } from '@angular/core';

import { Hero } from '../entities/hero';
import { ListHeroes } from '../data/heroes';
import { listener } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {}
  
  getHeroes(): Hero[]
  {
    return ListHeroes;
  }

  //Lay ds Hero theo ID
  getHeroesByID(id: number): Hero
  {
    //Su dung thuoc tinh find. Do da có ListHeroes ở trên rồi nên xuống đây gọi luôn nè =))
    return  ListHeroes.find(hero => hero.id === id);
  
  } 


}

