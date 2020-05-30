import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemographComponent } from './demograph.component';

describe('DemographComponent', () => {
  let component: DemographComponent;
  let fixture: ComponentFixture<DemographComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemographComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemographComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
