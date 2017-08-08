import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumablesListComponent } from './consumables-list.component';

describe('ConsumablesListComponent', () => {
  let component: ConsumablesListComponent;
  let fixture: ComponentFixture<ConsumablesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumablesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumablesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
