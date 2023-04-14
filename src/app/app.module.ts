import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import { CookieService } from 'ngx-cookie-service';
import { JwtInterceptor } from './interceptors/jwt-interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/effects/auth.effects';
import { UserEffects } from './state/effects/user.effects';
import { AuthService } from './services/auth.service';
import { authReducer } from './state/reducers/auth.reducer';
import { userReducer } from './state/reducers/user.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule, 
    StoreModule.forRoot({auth: authReducer, user: userReducer}), 
    EffectsModule.forRoot([AuthEffects, UserEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode()})
  ],
    
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CookieService, //* See ngx-cookie-service dependence
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }, //* Inject interceptor (handle headers whit token)
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
