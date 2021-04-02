import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'componente1', loadChildren: () => import('../componente1/componente1.module').then(m => m.Componente1Module), },
      { path: 'componente2', loadChildren: () => import('../componente2/componente2.module').then(m => m.Componente2Module), },
      { path: 'add', loadChildren: () => import('../input-add/input-add.module').then(m => m.InputAddModule), },
      { path: 'test01', loadChildren: () => import('../test01/test01.module').then(m => m.Test01Module), },
      { path: 'test02', loadChildren: () => import('../test02/test02.module').then(m => m.Test02Module), },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
