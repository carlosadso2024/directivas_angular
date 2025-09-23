import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Catalogo } from './components/catalogo/catalogo';
import { BotonEliminar } from './components/boton-eliminar/boton-eliminar';
import { HoverRojoDirective } from './directives/hover-rojo.directive';

@NgModule({
  declarations: [
    App,
    Catalogo,
    BotonEliminar,
    HoverRojoDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
