import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from './services/player.service';
import { GameService } from './services/game.service';
import { GameComponent } from './game.component';

@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule
  ],
  exports:[GameComponent],
  providers: [GameService, PlayerService]
})
export class GameModule { }
