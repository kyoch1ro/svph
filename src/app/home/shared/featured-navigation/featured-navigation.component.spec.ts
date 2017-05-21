import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedNavigationComponent } from './featured-navigation.component';

describe('FeaturedNavigationComponent', () => {
  let component: FeaturedNavigationComponent;
  let fixture: ComponentFixture<FeaturedNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
