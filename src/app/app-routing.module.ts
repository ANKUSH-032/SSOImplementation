import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaAuthGuardService } from './serives/okta-auth-guard.service';
import { HomeComponent } from './component/home/home.component';
import { SecureComponent } from './component/secure/secure.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'secure', component: SecureComponent, canActivate: [OktaAuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
