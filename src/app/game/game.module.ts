import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from './services/player.service';
import { GameService } from './services/game.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [GameService, PlayerService]
})
export class GameModule { }
