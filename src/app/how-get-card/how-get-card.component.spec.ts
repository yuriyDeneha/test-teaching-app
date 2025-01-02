import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowGetCardComponent } from './how-get-card.component';

describe('HowGetCardComponent', () => {
  let component: HowGetCardComponent;
  let fixture: ComponentFixture<HowGetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HowGetCardComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(HowGetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
