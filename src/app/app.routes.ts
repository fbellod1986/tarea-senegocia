import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { LayoutsComponent } from './views/layouts/layouts.component';

const ROUTES: Routes = [
  
  {
    path: 'layouts', component: LayoutsComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
    ]
  },

  {path: 'login', component: LoginComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'login'},
  
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
