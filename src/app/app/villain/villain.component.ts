import { Component, OnInit } from '@angular/core';
import { Villain } from '../entities/villain';

@Component({
  selector: 'app-villain',
  templateUrl: './villain.component.html',
  styleUrls: ['./villain.component.css']
})
export class VillainComponent implements OnInit {

  villain: Villain;
  constructor() { 
  this.villain = new Villain();
  this.villain.name = 'Vl chinsu';
  this.villain.skills = ['Bad guy', 'sida'];
  }
  

  ngOnInit() {
  }

}
