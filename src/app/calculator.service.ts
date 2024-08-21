import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { 
    // executeSum();
  }

  sumIntegersFromString(str: string): number {
    // Use a regular expression to match all sequences of digits
    const numbers = str.match(/\d+/g);
    // Convert the matched sequences to integers and sum them up
    const sum = numbers ? numbers.reduce((total, num) => total + parseInt(num, 10), 0) : 0;
    return sum;
  }

  // Example usage
  executeSum(): void {
    const result = this.sumIntegersFromString("2,3.4/5:6;9");
    console.log(result); // Output: 29
  }

}
console.log("test execution");
