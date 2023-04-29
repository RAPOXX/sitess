import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosdiComponent } from './cursosdi/cursosdi.component';
import { CursosdiService } from './cursosdi/cursosdi.service';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent,
    CursosComponent,
    CursosdiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CursosdiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
