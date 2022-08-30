import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderViewComponent } from './views/order-view/order-view.component';

const routes: Routes = [
  {path:'', component: OrderViewComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
