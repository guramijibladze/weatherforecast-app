import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { SpinerComponent } from './loading/spiner/spiner.component';



@NgModule({
  declarations: [
    LoadingComponent,
    SpinerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoadingComponent
  ]
})
export class SharedModule { }
