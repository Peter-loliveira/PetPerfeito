import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD

  {
    path: '',
    redirectTo: 'LoginPage',
    pathMatch: 'full'
  },

  {
    path: 'LoginPage',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'cadastro-usuario',
    loadChildren: () => import('./pages/cadastro-usuario/cadastro-usuario.module').then( m => m.CadastroUsuarioPageModule)
=======
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
>>>>>>> 0b1b801b77f04f2f68c5f4e08da72218d8684312
  },
  {
    path: 'pag-principal',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
<<<<<<< HEAD


];

=======
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
>>>>>>> 0b1b801b77f04f2f68c5f4e08da72218d8684312
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
<<<<<<< HEAD
export class AppRoutingModule { }
=======
export class AppRoutingModule {}
>>>>>>> 0b1b801b77f04f2f68c5f4e08da72218d8684312
