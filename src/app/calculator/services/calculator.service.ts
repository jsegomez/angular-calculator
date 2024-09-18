import { Injectable, signal } from '@angular/core';

const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const operators = ['+','-','*','/'];
const specialOperator = ['+/-', '%' , '.', '=', 'C', 'Backspace', 'Escape', 'c', 'Enter'];

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  public resultText = signal<string>('0');
  public subResultText = signal<string>('0');
  public lastOperator = signal<string>('+');  

  public constructNumber = (value: string): void => {    
    if(![...numbers, ...operators, ...specialOperator].includes(value)) return;    

    if(value === '=' || value == 'Enter') {          
      return this.calculareResult()
    };

    if(value === 'C' || value === 'Escape' || value === 'c'){      
      this.resultText.set('0');
      this.lastOperator.set('+');
      this.subResultText.set('0');      
      return;
    }

    // TODO: revisar cuando se tengan numeros negativos
    if(value === 'Backspace'){
      if(this.resultText() === '0') return
      if(this.resultText() === '-0' && this.resultText().length > 1) return this.resultText.set('0');

      if(this.resultText().length === 1) {
        this.resultText.set('0');
        return
      }

      this.resultText.update(prevVal => prevVal.slice(0, -1));      
      return;
    }

    // Aplicar operadores
    if(operators.includes(value)){
      this.calculareResult();
      this.lastOperator.set(value);
      this.subResultText.set(this.resultText())
      this.resultText.set('0');
      return
    }

    // Limitar numero de caracteres
    if(this.resultText().length >= 10) return console.log('Max length reached...')

    // Validar punto decimal
    if(value === '.' && !this.resultText().includes('.')){
      if(this.resultText() === '0' || this.resultText() == '') {
        this.resultText.set('0.');
        return;
      }      

      this.resultText.update((prevVal) => prevVal.concat('.'));
      return;
    }

    // Manejo del cero inicial
    if(value === '0' && (this.resultText() === '0' || this.resultText() === '-0')) {
      return
    }

    // Cambiar signo
    if(value == '+/-'){
      if(this.resultText().includes('-')){
        this.resultText.update(prevVal => prevVal.slice(1))
      }

      this.resultText.update(prevVal => '-'.concat(prevVal.slice(1)));
      return
    }

    if(numbers.includes(value)){      
      if(this.resultText() == '0'){
        this.resultText.set(value);
        return;
      }

      if(this.resultText() === '-0'){
        this.resultText.set('-'.concat(value));
        return
      }

      this.resultText.update(prevVal => prevVal.concat(value));
    }
    // this.resultText.update(preVal => preVal.concat(value))
  }

  calculareResult():void{    
    const numberOne = parseFloat(this.subResultText());
    const numberTwo = parseFloat(this.resultText());

    let result = 0;

    switch(this.lastOperator()){
      case '+':
        result = numberOne + numberTwo;
        break;
      case '-':
        result = numberOne - numberTwo;
        break;
      case '*':
        result = numberOne * numberTwo;
        break;
      case '/':
        result = numberOne / numberTwo;
        break;
      case '÷':
        result = numberOne / numberTwo;
        break;
    }

    this.resultText.set(result.toString());
    this.subResultText.set('0');    
  }

}
