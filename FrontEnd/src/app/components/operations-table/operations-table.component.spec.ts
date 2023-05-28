import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsTableComponent } from './operations-table.component';

describe('OperationsTableComponent', () => {
  let component: OperationsTableComponent;
  let fixture: ComponentFixture<OperationsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperationsTableComponent]
    });
    fixture = TestBed.createComponent(OperationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
