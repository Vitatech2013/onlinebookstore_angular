import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewQueriesComponent } from './admin-view-queries.component';

describe('AdminViewQueriesComponent', () => {
  let component: AdminViewQueriesComponent;
  let fixture: ComponentFixture<AdminViewQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewQueriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
