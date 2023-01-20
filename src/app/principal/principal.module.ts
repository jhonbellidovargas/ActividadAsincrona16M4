import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PERUComponent } from './peru/peru.component';
import { CHILEComponent } from './chile/chile.component';
import { URUGUAYComponent } from './uruguay/uruguay.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    PERUComponent,
    CHILEComponent,
    URUGUAYComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    PERUComponent,
    CHILEComponent,
    URUGUAYComponent
  ]
})
export class PrincipalModule { }
