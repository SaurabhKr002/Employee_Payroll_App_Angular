import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRollFormComponent } from './pay-roll-form.component';

describe('PayRollFormComponent', () => {
  let component: PayRollFormComponent;
  let fixture: ComponentFixture<PayRollFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayRollFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayRollFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
