import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPasswordSuccessComponent } from './new-password-success.component';

describe('NewPasswordSuccessComponent', () => {
  let component: NewPasswordSuccessComponent;
  let fixture: ComponentFixture<NewPasswordSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPasswordSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPasswordSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
