import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyListSearchComponent } from './survey-list-search.component';

describe('SurveyListSearchComponent', () => {
  let component: SurveyListSearchComponent;
  let fixture: ComponentFixture<SurveyListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyListSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
