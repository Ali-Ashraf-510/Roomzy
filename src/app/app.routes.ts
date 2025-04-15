import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';

import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { myguardGuard } from './myguard.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { AllhotelsComponent } from './allhotels/allhotels.component';
import { HoteldetailsComponent } from './hoteldetails/hoteldetails.component';
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: "full" },
    { path: 'home', component: HomeComponent  },
    { path:'aboutus', component:AboutusComponent},
    { path:'contactus', component:ContactusComponent},
    { path:'allhotels', component:AllhotelsComponent,canActivate:[myguardGuard]},
    { path: 'recipe/:id', component: HoteldetailsComponent,canActivate:[myguardGuard] },
    { path: 'login', component:LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path:"**",component:NotfoundComponent}


];
