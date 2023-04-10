import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopkeeperAddBooksComponent } from './shopkeeper-add-books.component';

describe('ShopkeeperAddBooksComponent', () => {
  let component: ShopkeeperAddBooksComponent;
  let fixture: ComponentFixture<ShopkeeperAddBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopkeeperAddBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopkeeperAddBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
