import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyRowComponent } from './survey-row.component';

describe('SurveyRowComponent', () => {
  let component: SurveyRowComponent;
  let fixture: ComponentFixture<SurveyRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
