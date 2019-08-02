import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'restaurantes', component: RestaurantesComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'restaurantes/:id', component: DetailsComponent},
  { path: '', component: HomeComponent, pathMatch: 'full'}
];
      
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
