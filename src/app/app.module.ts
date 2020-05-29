import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { ConsentComponent } from './components/consent/consent.component';
import { DemographComponent } from './components/demograph/demograph.component';
import { GameTutorialComponent } from './components/game-tutorial/game-tutorial.component';
import { GameComponent } from './components/game/game.component';
import { GameExpirimentComponent } from './components/game-expiriment/game-expiriment.component';
import { ModalModule } from './_modal';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { Part2Component } from './components/part2/part2.component';
import { Part3Component } from './components/part3/part3.component';
import { TnxComponent } from './components/tnx/tnx.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsentComponent,
    DemographComponent,
    GameTutorialComponent,
    GameComponent,
    GameExpirimentComponent,
    PageNotFoundComponent,
    Part2Component,
    Part3Component,
    TnxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
