import { TestBed } from '@angular/core/testing';

import { VideoGameService } from './videogame.service';

describe('VideogameService', () => {
  let service: VideoGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
