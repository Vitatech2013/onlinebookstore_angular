import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopkeeperOrderBooksComponent } from './shopkeeper-order-books.component';

describe('ShopkeeperOrderBooksComponent', () => {
  let component: ShopkeeperOrderBooksComponent;
  let fixture: ComponentFixture<ShopkeeperOrderBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopkeeperOrderBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopkeeperOrderBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
