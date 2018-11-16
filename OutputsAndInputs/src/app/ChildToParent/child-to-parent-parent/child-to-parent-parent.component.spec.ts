import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildToParentParentComponent } from './child-to-parent-parent.component';

describe('ChildToParentParentComponent', () => {
  let component: ChildToParentParentComponent;
  let fixture: ComponentFixture<ChildToParentParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildToParentParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildToParentParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
