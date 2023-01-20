import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PERUComponent } from './principal/peru/peru.component';
import { CHILEComponent } from './principal/chile/chile.component';
import { URUGUAYComponent } from './principal/uruguay/uruguay.component';

const routes: Routes = [
  { path: '', component: PERUComponent },
  { path: 'peru', component: PERUComponent },
  { path: 'chile', component: CHILEComponent },
  { path: 'uruguay', component: URUGUAYComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
