import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewShopsComponent } from './user-view-shops.component';

describe('UserViewShopsComponent', () => {
  let component: UserViewShopsComponent;
  let fixture: ComponentFixture<UserViewShopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewShopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
