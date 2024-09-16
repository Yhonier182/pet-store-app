// components/catalogo/catalogo.component.ts
import { Component, OnInit } from '@angular/core';
import { TestNameService } from '../../test-name.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  // ...

  constructor(
    private testNameService: TestNameService,
  ) { }

  ngOnInit(): void {
    const name = this.testNameService.getTestName();
    console.log(name);
  }
}
