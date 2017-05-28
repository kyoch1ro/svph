import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyListNavComponent } from './survey-list-nav.component';

describe('SurveyListNavComponent', () => {
  let component: SurveyListNavComponent;
  let fixture: ComponentFixture<SurveyListNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyListNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyListNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
