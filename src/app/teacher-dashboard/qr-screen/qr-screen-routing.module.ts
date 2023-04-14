import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrScreenPage } from './qr-screen.page';

const routes: Routes = [
  {
    path: '',
    component: QrScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrScreenPageRoutingModule {}
