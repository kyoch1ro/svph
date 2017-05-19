import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyCarouselComponent } from './survey-carousel.component';

describe('SurveyCarouselComponent', () => {
  let component: SurveyCarouselComponent;
  let fixture: ComponentFixture<SurveyCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
