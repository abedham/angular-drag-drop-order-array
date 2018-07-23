import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersGridComponent } from './numbers-grid.component';

describe('NumbersGridComponent', () => {
  let component: NumbersGridComponent;
  let fixture: ComponentFixture<NumbersGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbersGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbersGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
