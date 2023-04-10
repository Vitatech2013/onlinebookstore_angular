import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopkeeperViewBooksComponent } from './shopkeeper-view-books.component';

describe('ShopkeeperViewBooksComponent', () => {
  let component: ShopkeeperViewBooksComponent;
  let fixture: ComponentFixture<ShopkeeperViewBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopkeeperViewBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopkeeperViewBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
