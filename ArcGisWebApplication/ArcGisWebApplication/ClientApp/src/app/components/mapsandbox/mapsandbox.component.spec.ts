import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsandboxComponent } from './mapsandbox.component';

describe('MapsandboxComponent', () => {
  let component: MapsandboxComponent;
  let fixture: ComponentFixture<MapsandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
