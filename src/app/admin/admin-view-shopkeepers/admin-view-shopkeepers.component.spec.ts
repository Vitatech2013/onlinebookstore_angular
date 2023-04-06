import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewShopkeepersComponent } from './admin-view-shopkeepers.component';

describe('AdminViewShopkeepersComponent', () => {
  let component: AdminViewShopkeepersComponent;
  let fixture: ComponentFixture<AdminViewShopkeepersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewShopkeepersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewShopkeepersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
