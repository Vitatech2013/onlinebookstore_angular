import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopkeeperViewUsersComponent } from './shopkeeper-view-users.component';

describe('ShopkeeperViewUsersComponent', () => {
  let component: ShopkeeperViewUsersComponent;
  let fixture: ComponentFixture<ShopkeeperViewUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopkeeperViewUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopkeeperViewUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
