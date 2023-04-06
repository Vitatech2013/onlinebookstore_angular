import { TestBed } from '@angular/core/testing';

import { ShopkeeperGuard } from './shopkeeper.guard';

describe('ShopkeeperGuard', () => {
  let guard: ShopkeeperGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ShopkeeperGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
