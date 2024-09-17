import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//importamos el componente llamado catalogo
import { CatalogoComponent } from './components/catalogo/catalogo.component';

//importamos el componente llamado about
import { AboutComponent } from './components/about/about.component';

//importamos el componente llamado login
import { LoginComponent } from './components/login/login.component';


//en este array router incluir el objecto como esta definido  a continuacion
const routes: Routes = [

  {
    path:'login',
    component:LoginComponent
  },
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
