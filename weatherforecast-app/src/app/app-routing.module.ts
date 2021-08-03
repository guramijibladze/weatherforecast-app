import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', 
  loadChildren: () => import('./forecast/forecast.module').then(m => m.ForecastModule) },

  { path: 'today-detail', 
  loadChildren: () => import('./today-detail/today-detail.module').then(m => m.TodayDetailModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
