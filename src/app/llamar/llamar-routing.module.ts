import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { llamarPage } from './llamar.page';

const routes: Routes = [
  {
    path: '',
    component: llamarPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class llamarPageRoutingModule {}
