import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JointsComponent } from './joints.component';

describe('JointsComponent', () => {
  let component: JointsComponent;
  let fixture: ComponentFixture<JointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
