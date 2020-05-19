import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessItemSettingsComponent } from './process-item-settings.component';

describe('ProcessItemSettingsComponent', () => {
  let component: ProcessItemSettingsComponent;
  let fixture: ComponentFixture<ProcessItemSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessItemSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessItemSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
