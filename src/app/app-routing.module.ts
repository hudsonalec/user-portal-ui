import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './components/all/all.component';
import { FindComponent } from './components/find/find.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [

  // define the /path that corresponds to the component that should be rendered
  {path: '', component:MainComponent, pathMatch: "full"}, // upon intitializing the app, it loads the main component
  {path: 'main', component: MainComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'all', component: AllComponent},
  {path: 'find', component: FindComponent},

  {path: '**', component: MainComponent} // a WildCard Route is used to handle unknown paths (ALWAYS goes last)


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
