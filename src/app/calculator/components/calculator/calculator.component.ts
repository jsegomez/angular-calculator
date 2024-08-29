import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { CalculatorBotonComponent } from '../calculator-boton/calculator-boton.component';

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
  handleClick(event: string):void{
    console.log(event)
  }

  // @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent):void{
    this.handleClick(event.key)
  }
}
