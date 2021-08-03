import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', 
  loadChildren: () => import('./today-detail/today-detail.module').then(m => m.TodayDetailModule) },

  { path: 'forecast', 
  loadChildren: () => import('./forecast/forecast.module').then(m => m.ForecastModule) },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
