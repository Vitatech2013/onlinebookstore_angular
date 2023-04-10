import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopkeeperViewQueriesComponent } from './shopkeeper-view-queries.component';

describe('ShopkeeperViewQueriesComponent', () => {
  let component: ShopkeeperViewQueriesComponent;
  let fixture: ComponentFixture<ShopkeeperViewQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopkeeperViewQueriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopkeeperViewQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
