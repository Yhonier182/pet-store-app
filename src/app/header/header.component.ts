import { Component, OnInit, AfterContentInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {

  constructor() {
    console.log('1. Primero sucederá esto');
  }

  ngOnInit(): void {
    console.log('2. Luego esto');
  }

  ngAfterContentInit(): void {
    console.log('3. Después de que el contenido se haya inicializado');
  }

  ngAfterViewInit(): void {
    console.log('4. Después de que la vista del componente se haya inicializado');
  }

  ngOnDestroy(): void {
    console.log('5. Finalmente esto (cuando el componente sea destruido)');
  }

}
