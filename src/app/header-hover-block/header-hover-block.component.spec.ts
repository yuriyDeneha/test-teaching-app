import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHoverBlockComponent } from './header-hover-block.component';

describe('HeaderHoverBlockComponent', () => {
  let component: HeaderHoverBlockComponent;
  let fixture: ComponentFixture<HeaderHoverBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HeaderHoverBlockComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(HeaderHoverBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
