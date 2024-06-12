import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscacepComponent } from './componentes/buscacep/buscacep.component';


const routes: Routes = [
  {path:"",component:BuscacepComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
