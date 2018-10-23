import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message: string[];
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.getMessage().subscribe(
      x => {
        this.message = x;
      },
      error =>{
        console.log('Lỗi!');
      }
    );
  }

  clear1():void{
    this.messageService.clear();
  }

}
