import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { TravelDestiny } from '../models/travel-destiny.model';

@Component({
  selector: 'travel-destiny',
  templateUrl: './travel-destiny.component.html',
  styleUrls: ['./travel-destiny.component.less']
})
export class TravelDestinyComponent implements OnInit {
  @Input() destiny: TravelDestiny
  @HostBinding('attr.class') cssClass = "col-md-4"

  constructor() {}

  ngOnInit() {
  }

}
