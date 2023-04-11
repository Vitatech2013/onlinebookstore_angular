import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewQueriesComponent } from './user-view-queries.component';

describe('UserViewQueriesComponent', () => {
  let component: UserViewQueriesComponent;
  let fixture: ComponentFixture<UserViewQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewQueriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
