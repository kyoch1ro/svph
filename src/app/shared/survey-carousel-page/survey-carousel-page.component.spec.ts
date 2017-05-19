import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyCarouselPageComponent } from './survey-carousel-page.component';

describe('SurveyCarouselPageComponent', () => {
  let component: SurveyCarouselPageComponent;
  let fixture: ComponentFixture<SurveyCarouselPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyCarouselPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyCarouselPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
