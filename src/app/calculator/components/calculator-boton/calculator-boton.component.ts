import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, HostListener, input, output, signal, viewChild } from '@angular/core';

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
    '[class.w-2/4]': 'this.isDobleSize()',
    id: 'transfer'
  }
})
export class CalculatorBotonComponent {
  public isPressed = signal(false);
  public onClick = output<string>();
  public contentValue = viewChild<ElementRef<HTMLButtonElement>>('button');

  public isCommand = input(false, {
    transform: (value: string | boolean) => typeof value === 'string' ? value === '' : value
  });

  public isDobleSize = input(false, {
    transform: (value: string | boolean) => typeof value === 'string' ? value === '' : value
  });

  handleClick():void{    
    const content = this.contentValue()?.nativeElement.innerHTML;
    if(content)this.onClick.emit(content.trim());
  }

  keyboardPressedStyle(key: string){
    if(!this.contentValue()) return;
    const value = this.contentValue()?.nativeElement.innerText;
    
    if(value === key) this.isPressed.set(true);
    setTimeout(() => {
      this.isPressed.set(false);
    }, 50);
  }
}
