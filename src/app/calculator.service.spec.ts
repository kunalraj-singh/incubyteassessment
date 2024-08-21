import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('It should be generated to add.', () => {
    expect(service).toBeTruthy();
  });
  
  it('If input is null, then output should be 0.', () => {
    expect(service.sumIntegersFromString("")).toEqual(0);
  });

  it('It should add two numbers.', () => {
    expect(service.sumIntegersFromString("2, 3")).toEqual(5);
  });
  it('Integer numbers should allow sum with delimeters.', () => {
    expect(service.sumIntegersFromString("2,3.4/5:6;9")).toEqual(29);
  });

  it('Negative Numbers not allowed.', () => {
    expect(service.sumIntegersFromString("-2, 3")).toBeFalse;
  });

});
