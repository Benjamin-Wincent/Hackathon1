import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { CollectionComponent } from './collection/collection.component';

const routes: Routes = [
 {
  path: 'home',
  component: HomeComponent
  }, 
  {
  path: 'map',
  component: MapComponent
  },
  {
    path: 'collection',
    component: CollectionComponent
  },
  { path: "", redirectTo: '/home', pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }