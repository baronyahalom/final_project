import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsentComponent } from './components/consent/consent.component';
import { DemographComponent } from './components/demograph/demograph.component';
import { GameTutorialComponent } from './components/game-tutorial/game-tutorial.component';
import { GameComponent } from './components/game/game.component';
import { GameExpirimentComponent } from './components/game-expiriment/game-expiriment.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { Part2Component } from './components/part2/part2.component';
import { Part3Component } from './components/part3/part3.component';
import { TnxComponent } from './components/tnx/tnx.component';


const routes: Routes = [
  { path: 'consent', component: ConsentComponent },
  { path: 'demograph', component: DemographComponent },
  { path: 'tutorial', component: GameTutorialComponent },
  { path: 'hexGame', component: GameComponent },
  { path: 'expiriment', component: GameExpirimentComponent },
  { path: 'part2', component: Part2Component },
  { path: 'part3', component: Part3Component },
  { path: 'Tnx', component: TnxComponent },
  { path: '', redirectTo: 'consent', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
