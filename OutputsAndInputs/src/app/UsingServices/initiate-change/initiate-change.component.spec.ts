import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateChangeComponent } from './initiate-change.component';

describe('InitiateChangeComponent', () => {
  let component: InitiateChangeComponent;
  let fixture: ComponentFixture<InitiateChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiateChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiateChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
