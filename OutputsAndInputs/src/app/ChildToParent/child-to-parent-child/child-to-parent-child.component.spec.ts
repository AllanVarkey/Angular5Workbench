import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildToParentChildComponent } from './child-to-parent-child.component';

describe('ChildToParentChildComponent', () => {
  let component: ChildToParentChildComponent;
  let fixture: ComponentFixture<ChildToParentChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildToParentChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildToParentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
