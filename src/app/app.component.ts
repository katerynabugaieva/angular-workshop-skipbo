import { Component } from '@angular/core';
import { GameService } from './game/services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private gameService: GameService) {}
  title = 'skipbo';
}
