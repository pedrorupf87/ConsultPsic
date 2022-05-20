import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BancoComponent } from './banco/banco.component';
import { ConsultaBancoComponent } from './banco/consulta-banco/consulta-banco.component';
import { EditaBancoComponent } from './banco/edita-banco/edita-banco.component';
import { EscolaridadeComponent } from './escolaridade/escolaridade.component';
import { ConsultaEscolaridadeComponent } from './escolaridade/consulta-escolaridade/consulta-escolaridade.component';
import { EditaEscolaridadeComponent } from './escolaridade/edita-escolaridade/edita-escolaridade.component';

import { AcessoService } from './acesso.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
      NavbarComponent,
      BancoComponent,
      ConsultaBancoComponent,
      EditaBancoComponent,
      EscolaridadeComponent,
      ConsultaEscolaridadeComponent,
      EditaEscolaridadeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AcessoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
