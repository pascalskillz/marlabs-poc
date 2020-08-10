import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  /* { path: "login", component: LoginComponent }, */
  { path: "home", component: HomeComponent },
  { path: "watchlist", component: WatchlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
