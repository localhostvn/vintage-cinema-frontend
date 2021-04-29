import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//container
import { ContainerUserComponent } from "./container/users/user.component";
import { ContainerAdminComponent } from "./container/admin/admin.component";
import { admin_AuthGuard } from "./guards/admin_auth.guard";


const routes: Routes = [
  {
    path: '', component: ContainerUserComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./container/users/user.module').then(m => m.UserModule)
      }
    ]
  },
  {
    path: 'admin', component: ContainerAdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./container/admin/admin.module').then(m => m.AdminModule)
      }
    ],canActivate: [admin_AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

