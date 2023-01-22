import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDecisionComponent } from './default-decision.component';

describe('DefaultDecisionComponent', () => {
  let component: DefaultDecisionComponent;
  let fixture: ComponentFixture<DefaultDecisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultDecisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
