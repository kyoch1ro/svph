import { TestBed, inject } from '@angular/core/testing';

import { DevSurveyService } from './dev-survey.service';

describe('DevSurveyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevSurveyService]
    });
  });

  it('should be created', inject([DevSurveyService], (service: DevSurveyService) => {
    expect(service).toBeTruthy();
  }));
});
