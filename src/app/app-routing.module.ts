import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//importamos el componente llamado catalogo
import { CatalogoComponent } from './components/catalogo/catalogo.component';

//importamos el componente llamado about
import { AboutComponent } from './components/about/about.component';


//en este array router incluir el objecto como esta definido  a continuacion
const routes: Routes = [
  {
    path:'catalogo',
    component:CatalogoComponent
  },
  {
    path:'about',
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
