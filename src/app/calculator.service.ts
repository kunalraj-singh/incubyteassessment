import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  sumIntegersFromString(str: string): number {
    const numbers = str.match(/\d+/g);
    const sum = numbers ? numbers.reduce((total, num) => total + parseInt(num, 10), 0) : 0;
    return sum;
  }

  executeSum(): void {
    const result = this.sumIntegersFromString("2,3.4/5:6;9");
    console.log(result); // Output: 29
  }

}