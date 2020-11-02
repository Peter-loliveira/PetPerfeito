import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'pag-principal',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  // {
  //   path: 'pag-principal',
  //   loadChildren: () => import('./pages/pag-principal/pag-principal.module').then( m => m.PagPrincipalPageModule)
  // },
  // {
  //   path: 'cad-pets',
  //   loadChildren: () => import('./pages/cad-pets/cad-pets.module').then( m => m.CadPetsPageModule)
  // },
  // {
  //   path: 'busca',
  //   loadChildren: () => import('./pages/busca/busca.module').then( m => m.BuscaPageModule)
  // },
  // {
  //   path: 'chat',
  //   loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'cad-usuario',
  //   loadChildren: () => import('./pages/cad-usuario/cad-usuario.module').then( m => m.CadUsuarioPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
