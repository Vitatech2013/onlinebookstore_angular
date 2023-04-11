import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddQueriesComponent } from './user-add-queries.component';

describe('UserAddQueriesComponent', () => {
  let component: UserAddQueriesComponent;
  let fixture: ComponentFixture<UserAddQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddQueriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
