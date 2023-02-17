import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import {CreateComponent} from './pages/create/create.component';
import { StudioComponent } from './pages/studio/studio.component';
import {ActorComponent} from './pages/actor/actor.component';

const routes: Routes = [
  { path: '', component:ListComponent},
  {path:'newmovie', component: CreateComponent},
  {path:'editmovie/:id', component: CreateComponent},
  {path: 'newStudio', component: StudioComponent},
  {path: 'editStudio/:id', component: StudioComponent},
  {path: 'newActor', component: ActorComponent},
  {path: 'editActor/:id', component: ActorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
