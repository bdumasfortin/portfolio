import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent} from './pages/portfolio/portfolio.component';
import { SnakeComponent } from './pages/snake/snake.component';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'snake', component: SnakeComponent },
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: '**', redirectTo: '/portfolio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
