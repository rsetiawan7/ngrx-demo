import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(),
    EffectsModule.forFeature(),
  ]
})
export class DashboardNgrxModule { }
