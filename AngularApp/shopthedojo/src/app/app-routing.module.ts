import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// add-on components
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SellProductComponent } from './sell-product/sell-product.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLandingComponent } from './user-landing/user-landing.component';


const routes: Routes = [
  // if root is empty then we're redirecting them to registration.
  { path: '', pathMatch: 'full', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: LandingPageComponent },
  { path: 'dashboard/user/:id', component: UserDashboardComponent},
  { path: 'main/user/:id', component: UserLandingComponent},
  { path: 'sell', component: SellProductComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
