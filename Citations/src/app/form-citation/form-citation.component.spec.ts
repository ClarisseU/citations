import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCitationComponent } from './form-citation.component';

describe('FormCitationComponent', () => {
  let component: FormCitationComponent;
  let fixture: ComponentFixture<FormCitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
