import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceLaunchInfoComponent } from './space-launch-info.component';

describe('SpaceLaunchInfoComponent', () => {
  let component: SpaceLaunchInfoComponent;
  let fixture: ComponentFixture<SpaceLaunchInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceLaunchInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceLaunchInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
