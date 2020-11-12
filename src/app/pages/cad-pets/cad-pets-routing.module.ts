import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadPetsPage } from './cad-pets.page';

const routes: Routes = [
  {
    path: '',
    component: CadPetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadPetsPageRoutingModule {}
