// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BuscacepComponent } from './componentes/buscacep/buscacep.component';
//import { CepService } from './cep.service';

@NgModule({
  declarations: [
    BuscacepComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule, AppRoutingModule
  ],
  //providers: [CepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
