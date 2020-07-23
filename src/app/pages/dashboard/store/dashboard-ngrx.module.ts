import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { fromDashboard } from './reducers';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(fromDashboard.FEATURE_KEY, fromDashboard.reducer),
    EffectsModule.forFeature(),
  ]
})
export class DashboardNgrxModule { }
