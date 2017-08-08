import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumablesComponent } from './consumables.component';

describe('ConsumablesComponent', () => {
  let component: ConsumableComponent;
  let fixture: ComponentFixture<ConsumableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
