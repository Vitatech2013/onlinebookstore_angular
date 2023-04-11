import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchbooksComponent } from './user-searchbooks.component';

describe('UserSearchbooksComponent', () => {
  let component: UserSearchbooksComponent;
  let fixture: ComponentFixture<UserSearchbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSearchbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
