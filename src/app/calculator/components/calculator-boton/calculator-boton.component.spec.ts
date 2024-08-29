import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorBotonComponent } from './calculator-boton.component';

describe('CalculatorBotonComponent', () => {
  let component: CalculatorBotonComponent;
  let fixture: ComponentFixture<CalculatorBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorBotonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
