import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RoleAuthenticationComponent } from './pages/role-authentication/role-authentication.component';

const routes: Routes = [
  {
    path: "authentication",
    component: RoleAuthenticationComponent
  },
  {
    path: "",
    component: DashboardComponent
  },
  // {
  //   path: 'my-new-route',
  //   component: MyNewRouteComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
