import { ComponentFixture, TestBed } from '@angular/core/testing';

import CalculatorViewComponent from './calculator-view.component';

describe('CalculatorComponent', () => {
  let component: CalculatorViewComponent;
  let fixture: ComponentFixture<CalculatorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
