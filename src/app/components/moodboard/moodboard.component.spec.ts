import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodboardComponent } from './moodboard.component';

describe('MoodboardComponent', () => {
  let component: MoodboardComponent;
  let fixture: ComponentFixture<MoodboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoodboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoodboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
