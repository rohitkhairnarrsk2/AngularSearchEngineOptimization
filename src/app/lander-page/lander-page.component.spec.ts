import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanderPageComponent } from './lander-page.component';

describe('LanderPageComponent', () => {
  let component: LanderPageComponent;
  let fixture: ComponentFixture<LanderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
