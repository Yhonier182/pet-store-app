import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestNameService {

  private testName = 'Hola Mundo';

  constructor() { }


   getTestName():string{
    return this.testName;
  }
}
