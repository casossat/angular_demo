import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDestinyComponent } from './list-destiny.component';

describe('ListDestinyComponent', () => {
  let component: ListDestinyComponent;
  let fixture: ComponentFixture<ListDestinyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDestinyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDestinyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
