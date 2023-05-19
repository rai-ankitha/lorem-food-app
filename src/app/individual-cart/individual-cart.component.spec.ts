import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualCartComponent } from './individual-cart.component';

describe('IndividualCartComponent', () => {
  let component: IndividualCartComponent;
  let fixture: ComponentFixture<IndividualCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
