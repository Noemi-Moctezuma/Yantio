import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { llamarPage } from './llamar.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { llamarPageRoutingModule } from './llamar-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule,
    llamarPageRoutingModule
  ],
  declarations: [llamarPage]
})
export class llamarPageModule {}
