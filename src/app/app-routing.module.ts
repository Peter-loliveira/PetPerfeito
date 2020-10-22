import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'LoginPage',
    pathMatch: 'full'
  },
  {
    path: 'LoginPage',
    // loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro-usuario',
    loadChildren: () => import('./pages/cadastro-usuario/cadastro-usuario.module').then( m => m.CadastroUsuarioPageModule)
  },
  {
    path: 'cadastro-pets',
    loadChildren: () => import('./pages/cadastro-pets/cadastro-pets.module').then( m => m.CadastroPetsPageModule)
  },
  {
    path: 'select-pet',
    loadChildren: () => import('./pages/select-pet/select-pet.module').then( m => m.SelectPetPageModule)
  },  {
    path: 'pag-principal',
    loadChildren: () => import('./pages/pag-principal/pag-principal.module').then( m => m.PagPrincipalPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
