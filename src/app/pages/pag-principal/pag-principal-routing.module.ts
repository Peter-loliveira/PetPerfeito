import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagPrincipalPage } from './pag-principal.page';

const routes: Routes = [
  {
    path: '',
    component: PagPrincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagPrincipalPageRoutingModule {}
