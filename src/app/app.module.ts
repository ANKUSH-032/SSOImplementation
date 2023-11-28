import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { SecureComponent } from './component/secure/secure.component';
import { OktaAuthModule } from '@okta/okta-angular';
const config = {
  issuer: 'https://your-okta-domain.okta.com/oauth2/default',
  clientId: 'your-client-id',
  redirectUri: window.location.origin + '/implicit/callback',
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    OktaAuthModule.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
