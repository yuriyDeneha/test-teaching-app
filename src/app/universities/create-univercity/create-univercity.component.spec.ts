import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUnivercityComponent } from './create-univercity.component';

describe('CreateUnivercityComponent', () => {
  let component: CreateUnivercityComponent;
  let fixture: ComponentFixture<CreateUnivercityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUnivercityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUnivercityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
