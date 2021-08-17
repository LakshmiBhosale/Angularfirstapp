import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvebtBinding2Component } from './evebt-binding2.component';

describe('EvebtBinding2Component', () => {
  let component: EvebtBinding2Component;
  let fixture: ComponentFixture<EvebtBinding2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvebtBinding2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvebtBinding2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
