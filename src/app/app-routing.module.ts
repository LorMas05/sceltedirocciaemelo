import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultDecisionComponent } from './default-decision/default-decision.component';


const routes: Routes = [
  {path:'default-decision',component:DefaultDecisionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
