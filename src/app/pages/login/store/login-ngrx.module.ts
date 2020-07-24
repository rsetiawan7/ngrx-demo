import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { fromLogin } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './effects/login.effects';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromLogin.FEATURE_KEY, fromLogin.reducer),
    EffectsModule.forFeature([
      LoginEffects
    ])
  ]
})
export class LoginNgrxModule { }
