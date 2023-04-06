import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopkeeperLoginComponent } from './shopkeeper-login.component';

describe('ShopkeeperLoginComponent', () => {
  let component: ShopkeeperLoginComponent;
  let fixture: ComponentFixture<ShopkeeperLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopkeeperLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopkeeperLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
