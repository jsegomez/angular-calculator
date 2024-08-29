import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorComponent } from "../../components/calculator/calculator.component";

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    CalculatorComponent
],
  templateUrl: './calculator-view.component.html',  
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CalculatorViewComponent {

}
