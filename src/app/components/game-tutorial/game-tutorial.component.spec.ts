import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTutorialComponent } from './game-tutorial.component';

describe('GameTutorialComponent', () => {
  let component: GameTutorialComponent;
  let fixture: ComponentFixture<GameTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
