import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelDestinyComponent } from './travel-destiny.component';

describe('TravelDestinyComponent', () => {
  let component: TravelDestinyComponent;
  let fixture: ComponentFixture<TravelDestinyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelDestinyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelDestinyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
