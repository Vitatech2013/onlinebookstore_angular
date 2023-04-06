import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopkeeperRegisterationComponent } from './shopkeeper-registeration.component';

describe('ShopkeeperRegisterationComponent', () => {
  let component: ShopkeeperRegisterationComponent;
  let fixture: ComponentFixture<ShopkeeperRegisterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopkeeperRegisterationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopkeeperRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
