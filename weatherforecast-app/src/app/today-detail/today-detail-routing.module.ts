import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastDetailComponent } from './forecast-detail/forecast-detail.component';


const routes: Routes = [{ path: '', pathMatch: 'full', component: ForecastDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodayDetailRoutingModule { }
