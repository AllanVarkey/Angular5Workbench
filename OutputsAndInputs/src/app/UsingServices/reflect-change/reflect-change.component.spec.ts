import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectChangeComponent } from './reflect-change.component';

describe('ReflectChangeComponent', () => {
  let component: ReflectChangeComponent;
  let fixture: ComponentFixture<ReflectChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReflectChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflectChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
