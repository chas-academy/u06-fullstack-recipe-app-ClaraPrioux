import { TestBed } from '@angular/core/testing';

import { RecipesearchService } from './recipesearch.service';

describe('RecipesearchService', () => {
  let service: RecipesearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
