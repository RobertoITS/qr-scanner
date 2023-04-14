import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherDashboardPage } from './teacher-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherDashboardPage,
    children: [
      {
        path: 'qr-screen',
        loadChildren: () => import('./qr-screen/qr-screen.module').then( m => m.QrScreenPageModule)
      },
      {
        path: 'teacher-home',
        loadChildren: () => import('./teacher-home/teacher-home.module').then( m => m.TeacherHomePageModule)
      },
    ]
  },
 
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherDashboardPageRoutingModule {}
