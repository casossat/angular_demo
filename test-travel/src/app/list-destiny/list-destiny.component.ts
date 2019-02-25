import { Component, OnInit } from '@angular/core';
import { TravelDestiny } from '../models/travel-destiny.model';

@Component({
  selector: 'list-destiny',
  templateUrl: './list-destiny.component.html',
  styleUrls: ['./list-destiny.component.less']
})
export class ListDestinyComponent implements OnInit {
  destinies: TravelDestiny[]

  constructor() { 
    this.destinies = []
  }

  ngOnInit() {
  }

  save(name:string, url:string):boolean {
    this.destinies.push(new TravelDestiny(name, url))
    return false
  }
}
