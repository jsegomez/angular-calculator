import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, HostListener, input, output, viewChild } from '@angular/core';

@Component({
  selector: 'app-calculator-boton',
  standalone: true,
  imports: [],
  templateUrl: './calculator-boton.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./calculator-boton.component.css'],
  host: {
    class:'w-1/4 border-r border-b border-indigo-400',
    id: 'transfer'    
  }
})
export class CalculatorBotonComponent {
  public onClick = output<string>();
  public contentValue = viewChild<ElementRef<HTMLButtonElement>>('button');

  public isCommand = input(false, {
    transform: (value: string | boolean) => typeof value === 'string' ? value === '' : value
  });

  public isDobleSize = input(false, {
    transform: (value: string | boolean) => typeof value === 'string' ? value === '' : value
  });

  @HostBinding('class.w-2/4') get commandStyle(){
    return this.isDobleSize();
  }  

  handleClick():void{    
    const content = this.contentValue()?.nativeElement.innerHTML;
    if(content)this.onClick.emit(content.trim());
  }
}
