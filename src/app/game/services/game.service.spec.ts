import { TestBed} from '@angular/core/testing';
import { GameService } from './game.service';
import { GameModule } from '../game.module';

const service: GameService = TestBed.get(GameService);
TestBed.configureTestingModule({
  imports: [ GameModule ]
});

describe('ServiceService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should have a method start', () => {
      expect(service).toBeTruthy();
    });
    it('should have a method reset', () => {
      expect(service).toBeTruthy();
    });
    it('should have a getter deck', () => {
      expect(service).toBeTruthy();
    });
    it('should deck returns an ampty array ', () => {
      expect(service).toBeTruthy();
    });
    it('should have getter game ', () => {
      expect(service).toBeTruthy();
    });
    it('should have a gatter building ', () => {
      expect(service).toBeTruthy();
    });
    it('building returns an empty array ', () => {
      expect(service).toBeTruthy();
    });
    it('game returns null ', () => {
      expect(service).toBeTruthy();
    });

});
