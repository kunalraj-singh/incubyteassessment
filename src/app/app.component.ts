import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule, CommonModule, FormControl],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calculatorPrg';
  inputValue:any = "";
  result:any = "";
  message:any;


  addWithAllowedDelimeter() {
    let calcVal = this.inputValue;
    const negativeNumbers = /-\d+/g;
    if (calcVal.match(negativeNumbers)) {      
      this.message = "Negative numbers not allowed.";
      

    } else {
      this.message = undefined;
      const numbers = calcVal.match(/\d+/g);
      const sum = numbers?.reduce((total: number, num: string) => total + parseInt(num), 0); // Sum up the numbers
      console.log(sum);
      this.inputValue = sum;
    }
  }
}