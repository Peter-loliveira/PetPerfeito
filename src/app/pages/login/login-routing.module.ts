import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import { TabsPageModule } from 'src/app/tabs/tabs.module'
import { TabsPage } from 'src/app/tabs/tabs.page';
import { CadUsuarioPage } from 'src/app/pages/cad-usuario/cad-usuario.page'


const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'tabs',
    component: TabsPage,
  },
  {
    path: 'cadUsu',
    component: CadUsuarioPage,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes), TabsPageModule],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
