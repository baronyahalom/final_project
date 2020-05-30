import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameExpirimentComponent } from './game-expiriment.component';

describe('GameExpirimentComponent', () => {
  let component: GameExpirimentComponent;
  let fixture: ComponentFixture<GameExpirimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameExpirimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameExpirimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
