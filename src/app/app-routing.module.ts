import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponentsComponent } from './components/banner-components/banner-components.component';

const routes: Routes = [
    {
      path: 'subscription-components',
      component: BannerComponentsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
