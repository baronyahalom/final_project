import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TnxComponent } from './tnx.component';

describe('TnxComponent', () => {
  let component: TnxComponent;
  let fixture: ComponentFixture<TnxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TnxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TnxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
