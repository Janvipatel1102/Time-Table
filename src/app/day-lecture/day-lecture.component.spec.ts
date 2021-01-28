import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayLectureComponent } from './day-lecture.component';

describe('DayLectureComponent', () => {
  let component: DayLectureComponent;
  let fixture: ComponentFixture<DayLectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayLectureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
