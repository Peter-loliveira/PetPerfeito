import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'pagPrincipal',
        loadChildren: () => import('../pages/pag-principal/pag-principal.module').then(m => m.PagPrincipalPageModule)
      },
      {
        path: 'cadPets',
        loadChildren: () => import('../pages/cad-pets/cad-pets.module').then(m => m.CadPetsPageModule)
      },
      {
        path: 'busca',
        loadChildren: () => import('../pages/busca/busca.module').then(m => m.BuscaPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('../pages/chat/chat.module').then(m => m.ChatPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/pagPrincipal',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/pagPrincipal',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
