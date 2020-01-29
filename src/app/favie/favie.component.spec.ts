import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavieComponent } from './favie.component';

describe('FavieComponent', () => {
  let component: FavieComponent;
  let fixture: ComponentFixture<FavieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
