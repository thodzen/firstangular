import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { CounterComponent } from './components/counter/counter.component';
import { MediaContainerComponent } from './components/media-container/media-container.component';

const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'shopping',
    component: ShoppingComponent
  },
  {
    path: 'media',
    component: MediaContainerComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
