import { NgModule } from '@angular/core';
<<<<<<< HEAD
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
=======
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
<<<<<<< HEAD
>>>>>>> 1ee69159adc2dc902c1efa4d051238a4b5c8eaed
=======
>>>>>>> 1ee69159adc2dc902c1efa4d051238a4b5c8eaed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
