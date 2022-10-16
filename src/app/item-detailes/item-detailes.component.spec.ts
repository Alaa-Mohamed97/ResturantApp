import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailesComponent } from './item-detailes.component';

describe('ItemDetailesComponent', () => {
  let component: ItemDetailesComponent;
  let fixture: ComponentFixture<ItemDetailesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetailesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
