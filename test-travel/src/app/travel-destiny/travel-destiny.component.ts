import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { TravelDestiny } from '../models/travel-destiny.model';

@Component({
  selector: 'travel-destiny',
  templateUrl: './travel-destiny.component.html',
  styleUrls: ['./travel-destiny.component.less']
})
export class TravelDestinyComponent implements OnInit {
  @Input() destiny: TravelDestiny
  @HostBinding('attr.class') cssClass = "col-md-4"
  @Output() clicked: EventEmitter<TravelDestiny>

  constructor() {
    this.clicked = new EventEmitter()
  }

  ngOnInit() {
  }

  select() {
    this.clicked.emit(this.destiny)
    return false
  }
}
