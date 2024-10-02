import { Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { ServiceComponent } from './Components/service/service.component';
import { HomeComponent } from './Components/home/home.component';

export const routes: Routes = [
   {path: "", component: HomeComponent},
   {path: "about", component: AboutComponent},
   {path: "service", component: ServiceComponent}
];
