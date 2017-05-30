import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyListPaginationComponent } from './survey-list-pagination.component';

describe('SurveyListPaginationComponent', () => {
  let component: SurveyListPaginationComponent;
  let fixture: ComponentFixture<SurveyListPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyListPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
