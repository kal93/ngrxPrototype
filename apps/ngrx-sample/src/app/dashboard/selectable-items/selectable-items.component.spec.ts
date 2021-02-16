import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectableItemsComponent } from './selectable-items.component';

describe('SelectableItemsComponent', () => {
  let component: SelectableItemsComponent;
  let fixture: ComponentFixture<SelectableItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectableItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectableItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
