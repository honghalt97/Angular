import { Injectable } from '@angular/core';
import { Hero } from '../entities/hero';
import { ListHeroes } from '../data/heroes';
import { listener } from '@angular/core/src/render3/instructions';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {}
  
  getHeroes(): Observable<Hero[]>
  {
     // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(ListHeroes);
  }

  //Lay ds Hero theo ID
  getHeroesByID(id:Number): Hero
  {
    //Su dung thuoc tinh find. Do da có ListHeroes ở trên rồi nên xuống đây gọi luôn nè =))
    this.messageService.add('Hello soái ca ' + ListHeroes.find(hero=> hero.id==id).name);
    return ListHeroes.find(hero=> hero.id == id);
  
  } 


}

