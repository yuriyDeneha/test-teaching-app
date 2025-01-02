import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginPaddingComponent } from './margin-padding.component';

describe('MarginPaddingComponent', () => {
  let component: MarginPaddingComponent;
  let fixture: ComponentFixture<MarginPaddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [MarginPaddingComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(MarginPaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
