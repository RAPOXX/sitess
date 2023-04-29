import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionFormComponent } from '../section-form/section-form.component';
import { SectionInfoComponent } from '../section-info/section-info.component';
import { HeaderComponent } from 'src/app/header/header.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SectionFormComponent,
    SectionInfoComponent,
    HeaderComponent
  ],
})
export class SectionsModule {
  text = 'ola sou da section'
 }
