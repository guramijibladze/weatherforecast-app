import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AngularSvgIconModule } from 'angular-svg-icon';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule
  ], 
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class ShellModule { }
