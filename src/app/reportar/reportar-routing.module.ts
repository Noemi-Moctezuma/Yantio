import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { reportarPage } from './reportar.page';

const routes: Routes = [
  {
    path: '',
    component: reportarPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class reportarPageRoutingModule {}
