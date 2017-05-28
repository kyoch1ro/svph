import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyListContainerComponent } from './survey-list-container.component';

describe('SurveyListContainerComponent', () => {
  let component: SurveyListContainerComponent;
  let fixture: ComponentFixture<SurveyListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
