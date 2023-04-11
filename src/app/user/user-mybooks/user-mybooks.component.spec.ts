import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMybooksComponent } from './user-mybooks.component';

describe('UserMybooksComponent', () => {
  let component: UserMybooksComponent;
  let fixture: ComponentFixture<UserMybooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMybooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMybooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
