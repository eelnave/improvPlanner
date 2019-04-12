import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PlayerListComponent } from './show-builder/player-list/player-list.component';
import { GameListComponent } from './show-builder/game-list/game-list.component';
import { ShowAreaComponent } from './show-builder/show-area/show-area.component';
import { ShowBuilderComponent } from './show-builder/show-builder.component';
import { ExistingShowsComponent } from './existing-shows/existing-shows.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NewPlayerFormComponent } from './show-builder/player-list/new-player-form/new-player-form.component';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { NewGameFormComponent } from './show-builder/game-list/new-game-form/new-game-form.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    GameListComponent,
    ShowAreaComponent,
    ShowBuilderComponent,
    ExistingShowsComponent,
    NewPlayerFormComponent,
    NewGameFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule
  ],
  entryComponents: [
    NewPlayerFormComponent,
    NewGameFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
