import { ChangeDetectionStrategy, Component, computed, inject, viewChildren } from '@angular/core';
import { CalculatorBotonComponent } from '../calculator-boton/calculator-boton.component';
import { CalculatorService } from '@/calculator/services/calculator.service';

@Component({
  selector: 'app-calculator-component',
  standalone: true,
  imports: [CalculatorBotonComponent],
  templateUrl: './calculator.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)'
  }
})
export class CalculatorComponent {
  private calculatorServ = inject(CalculatorService);
  public calculatorButtons = viewChildren(CalculatorBotonComponent);

  public resultText = computed(() => this.calculatorServ.resultText());
  public subResultText = computed(() => this.calculatorServ.subResultText());
  public lasOperator = computed(() => this.calculatorServ.lastOperator());

  handleClick(key: string):void{    
    this.calculatorServ.constructNumber(key);
  }

  metodoAEliminar(value: string):void{
    console.log('El valor recibido es: ' + value)
  }
  
  handleKeyboardEvent(event: KeyboardEvent):void{
    this.handleClick(event.key);
    
    const keyEquivalens: Record<string, string> = {
      Backspace: 'C',
      Escape: 'C',
      Enter: '=',
      'X': '*',
      '/': '÷'
    }

    const keyValue = keyEquivalens[event.key] || event.key;
    
    this.calculatorButtons().forEach(button => {
      button.keyboardPressedStyle(keyValue || '');
    }) 
  }
}
