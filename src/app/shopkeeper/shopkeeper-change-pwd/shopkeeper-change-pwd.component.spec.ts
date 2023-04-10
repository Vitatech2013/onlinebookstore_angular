import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopkeeperChangePwdComponent } from './shopkeeper-change-pwd.component';

describe('ShopkeeperChangePwdComponent', () => {
  let component: ShopkeeperChangePwdComponent;
  let fixture: ComponentFixture<ShopkeeperChangePwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopkeeperChangePwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopkeeperChangePwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
