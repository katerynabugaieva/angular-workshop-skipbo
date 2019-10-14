import { TestBed} from '@angular/core/testing';
import { PlayerService } from './player.service';

const service: PlayerService = TestBed.get(PlayerService);

describe('ServiceService', () => {

    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should have a method discardHandCards', () => {
      expect(service).toBeTruthy();
    });

    it('should have a method placeHandCard', () => {
      expect(service).toBeTruthy();
    });
    it('should have a method placeStockCard', () => {
      expect(service).toBeTruthy();
    });
    it('should have a method PlaceDiscardCard', () => {
      expect(service).toBeTruthy();
    });
    it('should have a method addPlayerCPU', () => {
      expect(service).toBeTruthy();
    });
    it('should have a method getPlayers', () => {
      expect(service).toBeTruthy();
    });
    it('should have a method addHumanPlayer', () => {
      expect(service).toBeTruthy();
    });
});
