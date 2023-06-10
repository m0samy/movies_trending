import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { ActorsComponent } from './actors/actors.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  
  {path:'' , redirectTo:'register',pathMatch:'full'},
  {path:'home' , component:HomeComponent , canActivate:[AuthGuard]},
  {path:'movies' , component:MoviesComponent , canActivate:[AuthGuard]},
  {path:'tv' , component:TvShowsComponent , canActivate:[AuthGuard]},
  {path:'actors' , component:ActorsComponent , canActivate:[AuthGuard]},
  {path:'details/:id/:mediaType' , component:DetailsComponent , canActivate:[AuthGuard]},
  {path:'register' , component:RegisterComponent},
  {path:'login' , component:LoginComponent},
  {path:'**' , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
