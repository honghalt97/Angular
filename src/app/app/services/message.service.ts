import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {message} from "../data/message";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() { }
  
  getMessage():Observable<string[]>{
    return of(message)
  }

  add(messages: string) : void {
    message.push(messages);
  }

  //list mesage
 
  clear() {
    var tam=message.length;
    for(var i=0;i<tam;i++){
      message.pop();
    }
  }

  
}
